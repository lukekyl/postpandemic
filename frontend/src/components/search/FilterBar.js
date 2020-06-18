import React, { Component } from 'react';
import { Button, Form, InputGroup} from 'react-bootstrap';

class FilterBar extends Component {
    state = {
        filter: 0
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Submitting ${this.state.filter}`)
        return this.props.onFilter(this.state.filter)
    }

    render() {
        return (
            <Form className={this.props.classes} onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Row>
                <InputGroup className="Filter" >
                    <Form.Control
                        as="select"
                        id="inlineFormCustomSelect"
                        onChange={event => this.handleChange(event)}
                    >
                        <option value="0">Filters...</option>
                        <option value="1">Most Recent</option>
                        <option value="2">Highest Voted</option>
                    </Form.Control>
                
                <InputGroup.Append>
                    <Button variant="primary" type="submit">Filter Posts</Button>
                </InputGroup.Append>
                </InputGroup>
            </Form.Row>
            </Form>
        )
    };
}

export default FilterBar;

