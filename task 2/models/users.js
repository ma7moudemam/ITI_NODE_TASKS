const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const user = sequelize.define('users', {

    username: {

        type: DataTypes.STRING,
        allowNull: false
    }

})

user.sync({});

module.exports = user