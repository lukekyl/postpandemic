export function newPost(props) {
    let post = props

    return (dispatch) => {
        dispatch({ type: 'NEW_POST' })
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(newPost => {
                return dispatch({ type: 'ADD_NEW_POST', post: newPost })
            })
    }
}