import React, { Component } from 'react';
import PostsContainer from './posts/PostsContainer'
import NavContainer from './nav/NavContainer'
import Hero from '../components/hero/Hero'

class HomeContainer extends Component {
    state = {
        posts: this.props.posts
    }

    sortById = (posts) => {
        let sorted = posts.sort(function (a, b) {
            let idA = a.id
            let idB = b.id
            if (idA < idB) {
                return -1
            } else if (idA > idB) {
                return 1
            } else {
                return 0
            }
        })
        sorted.reverse()
        this.setState({
            posts: sorted
        })
        this.forceUpdate();
    }

    sortByVote = (posts) => {
        let sorted = posts.sort(function (a, b) {
            let voteA = a.vote
            let voteB = b.vote
            if (voteA < voteB) {
                return -1
            } else if (voteA > voteB) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({
            posts: sorted
        })
        this.forceUpdate();
    }

    handleFilter = (value) => {
        let posts = this.state.posts
        switch (value) {
            case '1':
                console.log('Sorting Posts by Id...')
                return this.sortById(posts)
            case '2':
                console.log('Sorting Posts by Vote...')
                return this.sortByVote(posts)
            default:
                return this.sortById(posts)
        }
    }

    render() {
        let postSelection = this.state.posts
        let size = 15;

        if (postSelection.length > size) {
            postSelection = postSelection.slice(0, size)
        }
        
        return (
            <React.Fragment>
                <NavContainer onFilter={this.handleFilter} />
                <Hero />
                <PostsContainer posts={postSelection} />
            </React.Fragment>
        )
    };
}


export default HomeContainer