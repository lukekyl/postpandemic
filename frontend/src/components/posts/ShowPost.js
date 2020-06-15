import React, { Component } from 'react';

class ShowPost extends Component {
    render() {
        const post = this.props.post
        console.log(post)
        return (
            <div className="ViewPost" id={post.id}>
                
            </div>
        )
    };
}

export default ShowPost;

