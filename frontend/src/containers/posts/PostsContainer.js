import React, { Component } from 'react';
import Posts from '../../components/posts/Posts'

class PostsContainer extends Component {
    
    render() {

        let floaty = true;

        return (
            <div className="PostsContainer">
                <Posts classes="Float_Posts Post" posts={this.props.posts} floaty={floaty} />
            </div>
        )
    };
}

export default PostsContainer;
