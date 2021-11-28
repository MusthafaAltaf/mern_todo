function fetchTodos() {
    return async (dispatch) => {
        return await fetch('http://localhost:3001/todos')
            .then(res => res.json())
            .then(res => dispatch({type: 'FETCH_TODOS', payload: res}))
            .catch(err => console.log(err))
        }
}

export default fetchTodos





