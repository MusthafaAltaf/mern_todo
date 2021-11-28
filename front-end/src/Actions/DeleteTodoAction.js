function DeleteTodoAction(id) {
    return async (dispatch) => {
        return await fetch(`http://localhost:3001/todos/deleteTodo/${id}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(res => dispatch({type: 'DELETE_TODO', payload: res}))
            .catch(err => console.log(err))
    }
}

export default DeleteTodoAction;