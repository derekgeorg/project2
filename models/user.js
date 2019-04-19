const bcrypt = require("bcrypt");

// TEST
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// bcrypt.genSalt(saltRounds, function(err, salt){
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash){
//         console.log(hash);
//     });
// });

//This file is essentially a module that allows sequelize to create a user in a users table with sequelize specifications(uniqueness) and 
//validaitons (checking if it is in email format). 
module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    User.associate = function (models) {
        User.hasMany(models.Search, {
            foreignKey: "UserId",
            onDelete: "CASCADE"
        });
    };

    //This uses bcrypt's compacre function to check a literal/plain text password against its 'salted' counterpart
    //Not sure what is returned exactly, maybe true/false
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    //This hook is a function called before creating the user and hashes the password with salt
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};