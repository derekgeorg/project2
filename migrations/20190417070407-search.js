"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.createTable("Searches", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            lost_location: {
                type: Sequelize.STRING,
                allowNull: false
            },
            intake_date: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            },
            looks_like: { type: Sequelize.STRING },
            color: {
                type: Sequelize.STRING,
                allowNull: false
            },
            sex: { type: Sequelize.STRING },
            age: { type: Sequelize.STRING },
        });
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.dropTable("Searches");
    }
};
