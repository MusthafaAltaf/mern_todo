const DeleteTodo = (deletedTodo={}, action) => {
    switch(action.type) {
        case 'DELETE_TODO':
            deletedTodo = action.payload
            break;
        default:
            deletedTodo = {};
            break;
    }
    return deletedTodo;
}

export default DeleteTodo;