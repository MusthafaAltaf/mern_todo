import React from 'react'
import { useDispatch } from 'react-redux';
import './Todo.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteTodoAction from '../Actions/DeleteTodoAction';
import fetchTodos from '../Actions/FetchTodos';


function Todo(props) {
    const todo = props.todo;
    const dispatch = useDispatch()

    const deleteTodo = async (id) => {
        await dispatch(DeleteTodoAction(id));
        dispatch(fetchTodos());
    }

    return (
        <div className='todo'>
            <Card className='todo_card' sx={{ minWidth: 200, backgroundColor: 'lightslategrey' }}>
            <CardContent>
                <div className='todo_card_cardContent_topline'>
                    <Typography sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
                    Title: {todo.title}
                    </Typography>
                    <DeleteIcon sx={{color: 'darkRed'}} fontSize='large' onClick={() => deleteTodo(todo._id)}></DeleteIcon>
                </div>
                <div className='todo_card_cardContent_bottomline'>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description: {todo.description}
                    </Typography>
                </div>
            </CardContent>
            </Card>
        </div>
    )
}

export default Todo
