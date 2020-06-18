import React, { Component } from 'react';
import Posts from '../../components/posts/Posts'

class PostsContainer extends Component {
    
    // handleUpdate = props => {
    //     return this.props.haveUpdated(props)
    // }

    render() {

        let floaty = true;

        return (
            <div className="PostsContainer">
                <Posts classes="Float_Posts Post" posts={this.props.posts} floaty={floaty} shouldUpdate={this.props.shouldUpdate} haveUpdated={this.handleUpdate} />
            </div>
        )
    };
}

export default PostsContainer;
