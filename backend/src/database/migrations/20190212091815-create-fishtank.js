'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Fishtanks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ownerId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            shoalId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            statusId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            closedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Fishtanks');
    }
};