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
            UserId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Users",
                    key: "id"
                }
            },
            search_name: {
                type: Sequelize.STRING,
            },
            pet_type: {
                type: Sequelize.STRING,
            },
            color: {
                type: Sequelize.STRING,
            },
            sex: { 
                type: Sequelize.STRING,
            }
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
