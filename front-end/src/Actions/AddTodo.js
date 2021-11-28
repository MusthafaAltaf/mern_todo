function AddTodo(title, description) {
    return async (dispatch) => {
        return await fetch('http://localhost:3001/todos/addTodo', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: title,
                description: description
            }),
        })
            .then(res => res.json())
            .then(res => dispatch({type: 'ADD_TODO', payload: res}))
            .catch(err => console.log(err))
    }
}

export default AddTodo;