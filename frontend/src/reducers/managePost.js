
import uuid from 'uuid';

export default function managePosts(state = {
    posts: [],
}, action) {


    switch (action.type) {
        case 'ADD_POST':

            const post = {
                title: action.title,
                image: action.image,
                message: action.message,
                date: action.date,
                vote: action.vote,
                id: uuid()
            }

            console.log(post)

            return { ...state, posts: [...state.posts, post] }

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
