import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/search/SearchBar'


class OtherNav extends Component {

    handleSearch = (props) => {
        return this.props.onSearch(props)
    }

    render() {
        return (
            <div className="Nav_Wrapper">
                <Link to={`/`}><h5 className="brand Nav_Container Nav_Top Nav_Left">back to home</h5></Link>
                <SearchBar classes="Nav_Container Nav_Top Searchbar" onSearch={this.handleSearch} />
            </div>
        )
    };
}

export default OtherNav;
