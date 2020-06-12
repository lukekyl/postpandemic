import uuid from 'react-uuid';

export default function managePosts(state = {
    posts: [],
    loading: false
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

        case 'ADD_POST':

            const post = {
                title: action.title,
                image: action.image,
                message: action.message,
                date: action.date,
                vote: action.vote,
                id: action.id
            }

            console.log(post)

            return { ...state, posts: [...state.posts, post], loading: false }

        // case 'DELETE_RESTAURANT':

        //     return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }


        // case 'ADD_REVIEW':

        //     console.log(action.restaurant)

        //     return { ...state, reviews: [...state.reviews, action.review] }


        // case 'DELETE_REVIEW':

        //     return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

        default:
            return state;
    }
};
