import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import './AddTodo.css'
import AddTodo from '../Actions/AddTodo';
import { useDispatch } from 'react-redux';
import fetchTodos from '../Actions/FetchTodos';



function AddTodos() {
    //setup react redux to post the items
    const [title, setTitle] = useState({title: ''})
    const [description, setDescription] = useState({description: ''})
    const dispatch = useDispatch()


    const handleTitle = (event) => {
        setTitle(() => {
            return { title: event.target.value}
        })
    }

    const handleDescription = (event) => {
        setDescription(() => {
            return { description: event.target.value}
        })
    }

    const AddTodos = async (event) => {
        event.preventDefault();
        await dispatch(AddTodo(title.title, description.description))
        dispatch(fetchTodos())
        setTitle(() => {return {title: ''}});
        setDescription(() => {return {description: ''}})
    }
    //try to implement validation logic for title
    return (
        <div className='add_todo'>
            <div className='add_todo_title'>
                <TextField onChange={handleTitle} label="Title" id="title" value={title.title} />
            </div>
            <div className='add_todo_description'>
                <TextField onChange={handleDescription} sx={{width: 1000}} label="Description" id="description" value={description.description}/>
            </div>
            <div className='add_todo_button'>
                <Button onClick={AddTodos} variant="contained" color="success" sx={{alignItems: 'right', height: 45}}>Add Todo <AddIcon fontSize='medium'></AddIcon></Button>        
            </div>
        </div>
    )
}

export default AddTodos
