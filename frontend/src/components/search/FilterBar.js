import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

class FilterBar extends Component {
    render() {

        return (
            <div className={this.props.classes}>
                <InputGroup className="Filter">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="filtericon">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Filter"
                        aria-label="Filter"
                        aria-describedby="filtericon"
                    />
                </InputGroup>
            </div>
        )
    };
}

export default FilterBar;

