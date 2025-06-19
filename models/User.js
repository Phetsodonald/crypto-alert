const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
});


module.exports = User;