"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
          */
        return queryInterface.changeColumn("Strays",
            "At AAC",
            {
                type: Sequelize.STRING,
                allowNull: true
            },
            "Age",
            {
                type: Sequelize.STRING,
                allowNull: true
            }

        );
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.changeColumn("Stray",
            "At AAC",
            {
                type: Sequelize.STRING,
                allowNull: false
            },
            "Age",
            {    
                type: Sequelize.STRING,
                allowNull: false
            }

        );
    }
};
