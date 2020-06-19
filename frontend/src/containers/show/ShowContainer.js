import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';
import OtherNav from '../nav/OtherNav'
import ShowPost from '../../components/posts/ShowPost'

class ShowContainer extends Component {
    render() {
        const match = this.props.match
        const posts = this.props.posts

        return (
            <div className="ShowContainer">
                <OtherNav />
                <Route path={`${match.url}/:postId`} render={routerProps => <ShowPost posts={posts} {...routerProps} />} />
            </div>
        )
    };
};



export default ShowContainer;
