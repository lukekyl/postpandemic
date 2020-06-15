import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/fetchPosts'
import PostsContainer from './posts/PostsContainer'
import NavContainer from './nav/NavContainer'
import Hero from '../components/hero/Hero'

class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }


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

function mapDispatchToProps(dispatch) {
    return { fetchPosts: () => dispatch(fetchPosts()) }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)