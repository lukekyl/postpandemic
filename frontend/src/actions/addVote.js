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

    return (dispatch) => {
        dispatch({ type: 'ADD_VOTE' })
        fetch(`http://localhost:3001/posts/${postId}`, configPost)
            .then(response => response.json())
            .then(upatedPost => {
                return dispatch({ type: 'UPDATE_POST', post: upatedPost })
            })
    }
}