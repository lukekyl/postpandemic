import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import ShowContainer from './containers/show/ShowContainer'
import SearchContainer from './containers/search/SearchContainer'
import AddContainer from './containers/add/AddContainer'

class App extends Component {

  

  render() {

    return (
      <Router>
      <React.Fragment>
        
            <Route exact path="/" component={HomeContainer} />
            <Route path="/posts" component={ShowContainer} />
            <Route path="/search" component={SearchContainer} />
            <Route exact path="/new" component={AddContainer} />
        
      </React.Fragment>
      </Router>
      )
  };
}

export default App