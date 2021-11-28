const express = require('express');
const Todos = require('../Models/todoSchema')
const router = express.Router();


router.get('/', async (req, res) => {
    await Todos.find()
        .then(todos => res.json(todos))
        .catch(err => console.log(err))
});

router.post('/addTodo', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const newTodo = new Todos({
        title,
        isDone: false,
        description
    })
    newTodo.save()
        .then(todo => res.json(todo))
        .catch(err => res.json(500, err))
});

router.delete('/deleteTodo/:id', async (req, res) => {
    const id = req.params.id;
    await Todos.findByIdAndDelete(id)
        .then(todo => res.json(todo))
        .catch(err => res.json(500, err));
});

module.exports = router

