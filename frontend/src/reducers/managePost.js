
import uuid from 'uuid';

export default function managePosts(state = {
    postss: [],
}, action) {


    switch (action.type) {
        // case 'ADD_RESTAURANT':

        //     const restaurant = {
        //         text: action.text,
        //         id: uuid()
        //     }

        //     console.log(restaurant)

        //     return { ...state, restaurants: [...state.restaurants, restaurant] }

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
