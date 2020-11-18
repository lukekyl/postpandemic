export function addVote(props) {
    let postId = props
    
    // console.log(props)

    const configPost = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            postId: postId
        })
    };

    // Dev Mode
    // const railsURL = 'http://localhost:3001'
    // return (dispatch) => {
    //     dispatch({ type: 'ADD_VOTE' })
    //     fetch(`${railsURL}/posts/${postId}`, configPost)
    //         .then(response => response.json())
    //         .then(upatedPost => {
    //             return dispatch({ type: 'UPDATE_POST', post: upatedPost })
    //         })
    // }


    // // Heroko Deployment Mode
    return (dispatch) => {
        dispatch({ type: 'ADD_VOTE' })
        fetch(`/posts/${postId}`, configPost)
            .then(response => response.json())
            .then(upatedPost => {
                return dispatch({ type: 'UPDATE_POST', post: upatedPost })
            })
    }
}