export function newPost(props) {
    let post = props

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

    //Dev Mode
    // const railsURL = 'http://localhost:3001'
    // return (dispatch) => {
    //     dispatch({ type: 'NEW_POST' })
    //     fetch(`${railsURL}/posts`, configPost)
    //         .then(response => response.json())
    //         .then(newPost => {
    //             return dispatch({ type: 'ADD_POST', post: newPost })
    //         })
    // }

    //Heroku Deployment Mode
    return (dispatch) => {
        dispatch({ type: 'NEW_POST' })
        fetch(`/posts`, configPost)
            .then(response => response.json())
            .then(newPost => {
                return dispatch({ type: 'ADD_POST', post: newPost })
            })
    }

}