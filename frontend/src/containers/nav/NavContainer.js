import React, { Component } from 'react';
import SearchBar from '../../components/search/SearchBar'
import FilterBar from '../../components/search/FilterBar'
import { Button } from 'react-bootstrap'
import {  } from 'react-bootstrap';
import { Plus } from 'react-feather';


class NavContainer extends Component {
    render() {

        return (
            <div className="Nav_Wrapper">
                <h5 className="brand Nav_Container Nav_Top Nav_Left">postpandemic</h5>
                <SearchBar classes="Nav_Container Nav_Top Nav_Right SearchHome" />
                <Button className="Nav_Container Nav_Right Nav_Bottom AddPost" variant="primary" size="lg"><Plus color="white" size={29} /><span> Add Post</span></Button>
                <FilterBar classes="FilterBar Nav_Container Nav_Bottom Nav_Left" />
            </div>
        )
    };
}

export default NavContainer;
