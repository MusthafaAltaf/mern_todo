const AddTodo = (newTodo={}, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            newTodo = action.payload
            break;
        default:
            newTodo = {};
            break;
    }
    return newTodo;
}

export default AddTodo;