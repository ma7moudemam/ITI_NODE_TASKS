const Todo = require('../models/todos')
const user = require('../models/users')

const create = (data)=> {

     return Todo.create(data).catch(console.log)
}

const findAll = ()=> {
    return Todo.findAll()
}

const findById = (id) => {
    return Todo.findone({where: {id}, include: 'user'})
}

const editById = (id, data) => {
    return Todo.update(data,{where: {id}})
}

const deleteById = (id) => {
    return Todo.destroy ({where:{id}})
}

module.exports = {

    create,
    findAll,
    findById,
    editById,
    deleteById
}