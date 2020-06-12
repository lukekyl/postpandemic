import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './actions/fetchPosts'
import { Container } from 'react-bootstrap'
import PostsContainer from './containers/posts/PostsContainer'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }


  render() {

    return (
      <Container className="App">
        <h1>Hello World</h1>
        {/* Add Navigation Component - Has Search Bar that on click directs to Search Container */}
        {/* Add Hero Title Component - Probably a Bootstrap component? */}
        <PostsContainer posts={this.props.posts} />
      </Container>
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