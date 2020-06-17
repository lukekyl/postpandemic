export function fetchImages(props) {
    let theme = props

    return (dispatch) => {
        dispatch({ type: 'FETCHING_IMAGES' })
        fetch(`https://api.unsplash.com/photos/?client_id=XffQQFGYRiH99tSA9XHL4Wmf8Bp4vFo4_okHOfRk_B0&query=${theme}`)
            .then(response => response.json())
            .then(imageArray => {
                return dispatch({ type: 'DISPLAY_IMAGES', images: imageArray })
            })
    }
}