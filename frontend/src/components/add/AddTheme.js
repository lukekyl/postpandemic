import React, { Component } from 'react';
import {Form, InputGroup, FormControl, Button } from 'react-bootstrap';

class AddTheme extends Component {
    state = {
        theme: ''
    }

    handleChange = (event) => {
        this.setState({
            theme: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let searchTheme = this.state.theme
        this.setState({
            theme: ''
        })
        console.log('Searching...')
        return this.props.onSearch(searchTheme)
    }

    render() {

        return (
            <div>
                <h2>New Post</h2>
                <h4>Insert Your Post Theme (One Word To Define Image Search)</h4>
                <br />
                <Form className="ThemeForm" onSubmit={event => this.handleSubmit(event)} >
                    <InputGroup >
                        <FormControl
                            placeholder="Insert Theme"
                            aria-label="Theme"
                            onChange={event => this.handleChange(event)}
                            value={this.state.theme}
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

export default AddTheme;
