'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('FishtankStatuses', [{
            name: 'ONGOING'
        }, {
            name: 'FINISHED'
        }, {
            name: 'EXPIRED'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('FishtankStatuses', null, {});
    }
};
