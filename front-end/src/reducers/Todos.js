const Todos = (todos = [], action) => {
    switch(action.type) {
        case 'FETCH_TODOS':
            todos = action.payload;
            break;
        default:
            todos = [];
            break;
    }
    return todos;
}

export default Todos;