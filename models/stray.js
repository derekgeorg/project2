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
        "Looks Like": {type: DataTypes.STRING},
        "Color": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Sex": {type: DataTypes.STRING},
        "Age": {
            type: DataTypes.STRING,
            allowNull: false
        },
        "Reunited": {
            type: DataTypes.STRING,
            defaultValue: false
        },
        "Image Link": {type: DataTypes.STRING},
    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
    });
    Stray.associate = function (models) {
        // associations can be defined here
    };
    return Stray;
};