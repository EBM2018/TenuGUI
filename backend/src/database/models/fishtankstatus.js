'use strict';
module.exports = (sequelize, DataTypes) => {
    const FishtankStatus = sequelize.define('FishtankStatus', {
        name: DataTypes.STRING
    }, {
        timestamps: false
    });
    FishtankStatus.associate = function(models) {
        // associations can be defined here
    };
    return FishtankStatus;
};