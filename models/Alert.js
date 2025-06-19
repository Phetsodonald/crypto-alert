const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Alert = sequelize.define('alert', {
    coin: DataTypes.STRING,
    currency: DataTypes.STRING,
    targetPrice: DataTypes.FLOAT,
    hasAlert: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

});


User.hasMany(Alert);
Alert.belongsTo(User);

module.exports = Alert;