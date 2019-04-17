"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Searches", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            "Lost Location": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Lost Date": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Type": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Looks Like": {type: Sequelize.STRING},
            "Color": {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Sex": {type: Sequelize.STRING},
            "Age": {type: Sequelize.STRING},
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Searches");
    }
};