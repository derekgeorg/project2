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
                type: Sequelize.STRING,
                allowNull: false
            },
            "At AAC": {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            "Intake Date": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Type": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Looks Like": {
                type: Sequelize.STRING,
                allowNull: true
            },
            "Color": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Sex": {
                type: Sequelize.STRING,
                allowNull: true
            },
            "Age": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Image Link": {
                type: Sequelize.STRING,
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