export function fetchPosts() {
    
    //Dev Mode
    // const railsURL = 'http://localhost:3001'
    // return (dispatch) => {
    //     dispatch({ type: 'LOADING_POSTS' })
    //     fetch(`${railsURL}/posts`)
    //         .then(response => response.json())
    //         .then(postArray => {
    //             return dispatch({ type: 'ADD_POSTS', posts: postArray })
    //         })
    // }

    //Heroku Deployment Mode
    return (dispatch) => {
        dispatch({ type: 'LOADING_POSTS' })
        fetch(`/posts`)
            .then(response => response.json())
            .then(postArray => {
                return dispatch({ type: 'ADD_POSTS', posts: postArray })
            })
    }
}