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
            "Found Location": {
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
            "Age": DataTypes.STRING,
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
        return queryInterface.dropTable("Searches");
    }
};