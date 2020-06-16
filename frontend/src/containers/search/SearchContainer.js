import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';
import SearchNav from '../nav/SearchNav'
import Posts from '../../components/posts/Posts'

class SearchContainer extends Component {
    state = {
        term: ''
    }

    posts = this.props.posts
    
    handleSearch = props => {
        this.setState({
            term: props
        })
        this.props.history.replace(`/search/${props}`);
    }

    filterPosts = (posts, term) => {
        return posts.filter(
            post =>
                post.message.toLocaleLowerCase().includes(term) ||
                post.title.toLocaleLowerCase().includes(term)
        );
    }

    render() {
        const match = this.props.match
        const posts = this.props.posts
        let filterPosts
        
        if ( this.state.term !== '' ) {
            console.log(this.state)
            filterPosts = this.filterPosts(posts, this.state.term)
        }
        
        const postsToDisplay = filterPosts ? filterPosts : posts
        console.log(postsToDisplay)
        
        return (
            <div className="SearchContainer">
                <SearchNav onSearch={this.handleSearch} />
                <Route path={`${match.url}`} render={routerProps => <Posts posts={postsToDisplay} term={this.state.term} {...routerProps}  />} />
            </div>
        )
    };
};



export default SearchContainer;
