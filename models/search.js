"use strict";
module.exports = (sequelize, DataTypes) => {
    const Search = sequelize.define("Search", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        "Lost Location": {
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
        "Looks Like": {type: DataTypes.STRING},
        "Color": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Sex": {type: DataTypes.STRING},
        "Age": {type: DataTypes.STRING}
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