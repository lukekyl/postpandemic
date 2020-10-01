import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/fetchPosts';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Perf from "react-addons-perf"; // Benchmarking
import LoadingContainer from './containers/LoadingContainer'
import HomeContainer from './containers/HomeContainer'
import ShowContainer from './containers/show/ShowContainer'
import SearchContainer from './containers/search/SearchContainer'
import AddContainer from './containers/add/AddContainer'

class App extends Component {

  componentDidMount() {
    Perf.start();
    this.props.fetchPosts()
  }

  componentDidUpdate() {
    Perf.stop()
    Perf.printInclusive()
    Perf.printWasted()
  }

  render() {

    let posts = this.props.posts
    if (posts.length > 0) {
      return (
        <Router>
        <React.Fragment>
            <Route exact path="/" render={(props)=> <HomeContainer posts={posts} {...props} />} />
            <Route path="/posts" render={(props) => <ShowContainer posts={posts} {...props} />} />
            <Route path="/search" render={(props) => <SearchContainer posts={posts} {...props} />} />
            <Route exact path="/new" component={AddContainer} />
        </React.Fragment>
        </Router>
      )
    } else { 
      return (
        <Router>
          <LoadingContainer /> 
        </Router>
      )
    }
    
  };
}

function mapDispatchToProps(dispatch) {
  return { fetchPosts: () => dispatch(fetchPosts()) }
}

function mapStateToProps(state) {
  return { posts: state.posts, loading: state.loading }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)