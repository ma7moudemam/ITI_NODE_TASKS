const {DataTypes} = require('sequelize')
const user = require('./users')
const sequelize = require('../db')

const Todo = sequelize.define('todos', {

    content: {

        type: DataTypes.STRING
    }

})

Todo.belongsTo(user)
Todo.sync({});
module.exports = Todo