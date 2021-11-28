const mongoose = require('mongoose')

const todosSchema = new mongoose.Schema({
    title: 'String',
    isDone: Boolean,
    description: 'String',
    dateCreated: {type: Date, default: Date.now},
})

const Todos = mongoose.model('Todos', todosSchema);

module.exports = Todos;