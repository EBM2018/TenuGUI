'use strict';
module.exports = (sequelize, DataTypes) => {
    const Fishtank = sequelize.define('Fishtank', {
        ownerId: DataTypes.INTEGER,
        shoalId: DataTypes.INTEGER,
        statusId: DataTypes.INTEGER
    }, {
        timestamps: true,
        updatedAt: false
    });
    Fishtank.associate = function(models) {
        // associations can be defined here
    };
    return Fishtank;
};