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

        case 'ADD_VOTE':
            console.log('Adding New Vote...')

            return {
                ...state,
                posts: [...state.posts],
                loading: true
            }

        case 'UPDATE_POST':
            // console.log(action)
            const index = state.posts.findIndex(post => post.id === action.post.id)

            return {
                ...state,
                posts: [
                ...state.posts.slice(0, index), // everything before current post
                {
                    ...state.posts[index] = action.post
                },
                ...state.posts.slice(index + 1), // everything after current post
            ]
            }

        default:
            return state;
    }
};
