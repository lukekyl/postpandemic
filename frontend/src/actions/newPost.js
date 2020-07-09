export function newPost(props) {
    let post = props
    // const railsURL = 'http://localhost:3001'

    console.log(props)

    const configPost = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            post: post 
        })
    };

    console.log(configPost)

    return (dispatch) => {
        dispatch({ type: 'NEW_POST' })
        fetch(`/posts`, configPost)
            .then(response => response.json())
            .then(newPost => {
                return dispatch({ type: 'ADD_POST', post: newPost })
            })
    }
}