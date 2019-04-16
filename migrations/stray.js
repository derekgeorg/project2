"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Strays", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
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
            "Looks Like": DataTypes.STRING,
            "Color": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "Sex": DataTypes.STRING,
            "Age": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "Reunited": DataTypes.STRING,
            "Image Link": {
                type: DataTypes.STRING,
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Strays");
    }
};