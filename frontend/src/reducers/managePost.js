// import uuid from 'react-uuid';

export default function managePosts(state = {
    posts: [],
    loading: false,
    images: []
}, action) {


    switch (action.type) {
        
        case 'LOADING_POSTS':

            console.log('Loading Posts...')

            return {
                ...state,
                posts: [...state.posts],
                loading: true
            }

        case 'ADD_POSTS':

            console.log(action.posts)
            const posts = action.posts

            return {
                ...state,
                posts: posts,
                loading: false
            }

        case 'NEW_POST':
            console.log('Adding Post...')

            return {
                ...state,
                posts: [...state.posts],
                loading: true
            }    

        case 'ADD_POST':

        console.log(action)

            const post = {
                title: action.post.title,
                image: action.post.image,
                message: action.post.message,
                date: action.post.date,
                vote: action.post.vote,
                id: action.post.id
            }

            console.log(post)

            return { ...state, posts: [...state.posts, post], loading: false }


        case 'LOADING_IMAGES':

            console.log('Loading Images...')
            
            return {
                ...state,
                images: [...state.images]
            }

        case 'DISPLAY_IMAGES':

            let images = action.images.results
            // console.log(action)
            // console.log(images)
            if ( images.length > 9 ){
            let imageNum = 9
            images = images.slice(0, imageNum)
            }

            return {
                ...state,
                images: images
            }    


        // case 'ADD_REVIEW':

        //     console.log(action.restaurant)

        //     return { ...state, reviews: [...state.reviews, action.review] }


        // case 'DELETE_REVIEW':

        //     return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

        default:
            return state;
    }
};
