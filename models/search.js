"use strict";
module.exports = (sequelize, DataTypes) => {
    const Search = sequelize.define("Search", {
        UserId: {
            type: DataTypes.INTEGER,
            onDelete: "CASCADE",
            references: {
                model: "Users",
                key: "id"
            }
        },
        search_name: {
            type: DataTypes.STRING,
        },
        pet_type: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
        sex: { 
            type: DataTypes.STRING,
        },
    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
    });
    Search.associate = function (models) {
        // associations can be defined here
        Search.belongsTo(models.User, {
            foreignKey: "UserId",
            onDelete: "CASCADE"
        });
    };
    return Search;
};