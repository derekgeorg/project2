"use strict";
module.exports = (sequelize, DataTypes) => {
    const Stray = sequelize.define("Stray", {
        "Found Location": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "At AAC": {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        "Intake Date": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Type": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Looks Like": {
            type: DataTypes.STRING,
            allowNull: true
        },
        "Color": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Sex": {
            type: DataTypes.STRING,
            allowNull: true
        },
        "Age": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Image Link": {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {});
    Stray.associate = function (models) {
        // associations can be defined here
    };
    return Stray;
};