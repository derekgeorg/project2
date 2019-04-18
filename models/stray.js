"use strict";
module.exports = (sequelize, DataTypes) => {
    const Stray = sequelize.define("Stray", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        image: DataTypes.JSON,
        at_aac:  DataTypes.BOOLEAN,  
        color: DataTypes.STRING,
        sex: DataTypes.STRING,
        animal_id: DataTypes.STRING,
        location: DataTypes.JSON,
        type: DataTypes.STRING,
        looks_like: DataTypes.STRING,
        age: DataTypes. STRING,  
        intake_date: DataTypes.DATE
    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
    });
    Stray.associate = function (models) {
        // associations can be defined here
    };
    return Stray;
};