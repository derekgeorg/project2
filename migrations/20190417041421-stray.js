"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.createTable("Strays", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            image: {
                type: Sequelize.JSON,
                /*
                type: Sequelize.TEXT,
                get: function () {
                    return JSON.parse(this.getDataValue("image"));
                },
                set: function (image) {
                    this.setDataValue("image", JSON.stringify(image));
                }
                */
                get ( image ) {
                    return typeof this.getDataValue(image) === "string" ? JSON.parse(this.getDataValue(image)) : this.getDataValue(image);
                }
            },
            at_aac: Sequelize.BOOLEAN,
            color: Sequelize.STRING,
            sex: Sequelize.STRING,
            animal_id: Sequelize.STRING,
            location: {
                type: Sequelize.JSON
            },
            type: Sequelize.STRING,
            looks_like: Sequelize.STRING,
            age: Sequelize.STRING,
            intake_date: Sequelize.DATE
        });
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.dropTable("Strays");
    }
};
