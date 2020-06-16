import React, { Component } from 'react';
import PostsContainer from './posts/PostsContainer'
import NavContainer from './nav/NavContainer'
import Hero from '../components/hero/Hero'

class HomeContainer extends Component {

    render() {
        let posts = this.props.posts
        
        var size = 15;
        var postSelection = posts.slice(0, size)
        
        return (
            <React.Fragment>
                <NavContainer />
                <Hero />
                <PostsContainer posts={postSelection} />
            </React.Fragment>
        )
    };
}


export default HomeContainer