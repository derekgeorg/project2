"use strict";
module.exports = (sequelize, DataTypes) => {
    const Search = sequelize.define("Search", {
        "Found Location": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Lost Date": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Type": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Looks Like": DataTypes.STRING,
        "Color": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Sex": DataTypes.STRING,
        "Age": DataTypes.STRING
    }, {});
    Search.associate = function (models) {
        // associations can be defined here
        Search.belongsTo(models.User, {
            foreignKey: "UserId",
            onDelete: "CASCADE"
        });
    };
    return Search;
};