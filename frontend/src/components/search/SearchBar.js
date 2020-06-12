import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
    render() {

        return (
            <div className={this.props.classes}>
                <InputGroup className="Search">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="searchicon">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="searchicon"
                        />
                </InputGroup>
            </div>
        )
    };
}

export default SearchBar;

