import React, { Component } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-feather';

class SearchBar extends Component {
    state = {
        term: ''
    }

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let searchTerm = this.state.term
        this.setState({
            term: ''
        })
        console.log('Searching...')
        return this.props.onSearch(searchTerm)
    }

    render() {

        return (
            <div className={this.props.classes}>
                <Form onSubmit={event => this.handleSubmit(event)} >
                <InputGroup className="Search" >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="searchicon"><Search /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="searchicon"
                            onChange={event => this.handleChange(event)}
                            value={this.state.term}
                        />
                        <InputGroup.Append>
                        <Button variant="primary" type="submit">Submit</Button>
                        </InputGroup.Append>
                </InputGroup>
                </Form>
            </div>
        )
    };
}

export default SearchBar;

