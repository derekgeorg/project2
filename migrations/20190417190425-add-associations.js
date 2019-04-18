"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.addColumn(
            "Searches", // name of source model
            "UserId", // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Users",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL"
            });
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.removeColumn(
            "Searches", // name of Source model
            "UserId" // key we want to remove
        );
    }
};
