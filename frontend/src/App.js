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

    return (
      <React.Fragment>
        <NavContainer />
        
        {/* Add Hero Title Component - Probably a Bootstrap component? */}
        <PostsContainer posts={this.props.posts} />
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