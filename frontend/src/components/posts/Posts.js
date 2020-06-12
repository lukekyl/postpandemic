import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {
    
    postList = () => this.props.posts.map(post => <Post key={post.id} post={post} />)
    
    render() {
        return (
            <div className="Posts">
                {this.postList()}
            </div>
        )
    };
}

export default Posts;
