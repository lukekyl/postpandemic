import React, { Component } from 'react';
import Posts from '../../components/posts/Posts'

class PostsContainer extends Component {
    render() {

        return (
            <div className="PostsContainer">
                Home Page Floating Posts Container
                {/* <Posts posts={this.props.posts} /> */}
            </div>
        )
    };
}

export default PostsContainer;
