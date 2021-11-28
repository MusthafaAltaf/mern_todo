import Todos from "./Todos";
import AddTodo from './AddTodo';
import DeleteTodo from './DeleteTodo'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    Todos: Todos,
    AddTodo: AddTodo,
    DeleteTodo: DeleteTodo
})

export default allReducers;