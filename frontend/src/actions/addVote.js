export function addVote(props) {
    let postId = props
    // const railsURL = 'http://localhost:3001'
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

    return (dispatch) => {
        dispatch({ type: 'ADD_VOTE' })
        fetch(`/posts/${postId}`, configPost)
            .then(response => response.json())
            .then(upatedPost => {
                return dispatch({ type: 'UPDATE_POST', post: upatedPost })
            })
    }
}