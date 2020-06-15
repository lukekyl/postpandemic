import React, { Component } from 'react';
import NavContainer from './nav/NavContainer'
import Hero from '../components/hero/Hero'

class LoadingContainer extends Component {
    

    render() {
        return (
            <React.Fragment>
                <NavContainer />
                <Hero />
            </React.Fragment>
        )
    };
}


export default LoadingContainer