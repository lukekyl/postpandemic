import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/search/SearchBar'
import FilterBar from '../../components/search/FilterBar'
import { Button } from 'react-bootstrap'
import {  } from 'react-bootstrap';
import { Plus } from 'react-feather';


class NavContainer extends Component {
    render() {

        return (
            <div className="Nav_Wrapper">
                <Link to={`/`}><h5 className="brand Nav_Container Nav_Top Nav_Left">postpandemic</h5></Link>
                <Link to={'/search'}><SearchBar classes="Nav_Container Nav_Top Nav_Right SearchHome" /></Link>
                <Link to={'/new'}><Button className="Nav_Container Nav_Right Nav_Bottom AddPost" variant="primary" size="lg"><Plus color="white" size={29} /><span> Add Post</span></Button></Link>
                <FilterBar classes="FilterBar Nav_Container Nav_Bottom Nav_Left" />
            </div>
        )
    };
}

export default NavContainer;
