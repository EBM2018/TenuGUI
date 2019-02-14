'use strict';

module.exports = (sequelize, DataTypes) => {
    const FishtankStatus = sequelize.define('FishtankStatus', {
        name: DataTypes.STRING
    }, {
        timestamps: false
    });
    FishtankStatus.associate = (models) => {
        // associations can be defined here
    };
    return FishtankStatus;
};