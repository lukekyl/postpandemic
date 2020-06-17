export function fetchImages(props) {
    let theme = props
    return (dispatch) => {
        dispatch({ type: 'FETCHING_IMAGES' })
        fetch(`https://api.unsplash.com/search/photos/?query=${theme}&client_id=XffQQFGYRiH99tSA9XHL4Wmf8Bp4vFo4_okHOfRk_B0`)
            .then(response => response.json())
            .then(imageArray => {
                return dispatch({ type: 'DISPLAY_IMAGES', images: imageArray })
            })
    }
}