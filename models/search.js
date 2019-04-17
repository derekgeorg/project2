"use strict";
module.exports = (sequelize, DataTypes) => {
    const Search = sequelize.define("Search", {
        lost_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        intake_date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        looks_like: {type: DataTypes.STRING},
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {type: DataTypes.STRING},
        age: {type: DataTypes.STRING}
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