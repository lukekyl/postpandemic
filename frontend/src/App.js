import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './actions/fetchPosts'
import { Container } from 'react-bootstrap'
import PostsContainer from './containers/posts/PostsContainer'
import NavContainer from './containers/nav/NavContainer'

class App extends Component {

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
        <h1>Post Pandemic</h1>
        {/* Add Hero Title Component - Probably a Bootstrap component? */}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)