const express = require('express');
const app = express();
const todos = require('./Routes/todos')
// const Todos = require('./Models/todoSchema')
const mongoose = require('mongoose');
const cors = require('cors');


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use('/todos', todos); //homepage gives the list of todos from database.


mongoose.connect('mongodb://localhost/Todos')
    .then(() => console.log('connnected to database'))
    .catch(() => console.log('cannot connect to database'));

var port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening to port ${port}`))


// module.exports = Todos;
module.exports = mongoose;