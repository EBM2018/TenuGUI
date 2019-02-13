'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('FishtankStatuses', [{
            name: 'Ongoing'
        }, {
            name: 'Finished'
        }, {
            name: 'Expired'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('FishtankStatuses', null, {});
    }
};
