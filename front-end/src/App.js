import React, {useEffect } from 'react'
import Todo from './Components/Todo'
import './App.css';
import Header from './Components/Header';
import AddTodos from './Components/AddTodos'
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from './Actions/FetchTodos'

function App() {
  const todos = useSelector(state => state.Todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])  

  return (
    <div className="App">
      <Header></Header>
      <AddTodos/>
      <div className='App_Todos'>
        {todos.map(todo => <Todo todo={todo} key={todo._id}></Todo>)}
      </div>
    </div>
  );
}

export default App;
