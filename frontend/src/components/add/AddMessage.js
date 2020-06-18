import React, { Component } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

class AddMessage extends Component {
    state = {
        title: '',
        message: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let messageData = this.state
        this.setState({
            title: '',
            message: ''
        })
        console.log('Adding Message Data...')
        return this.props.onMessageSubmit(messageData)
    }

    render() {

        return (
            <div>
                <h2>Message</h2>
                <h6>Insert A Title and Message For Your Post</h6>
                <Form className="ThemeForm" onSubmit={event => this.handleSubmit(event)} >
                    <InputGroup >
                        <FormControl
                            placeholder="Insert Title"
                            aria-label="Title"
                            name='title'
                            onChange={event => this.handleChange(event)}
                            value={this.state.title}
                        />
                    </InputGroup>
                    <InputGroup >
                        <FormControl
                            as="textarea" rows="3"
                            placeholder="Insert Message"
                            aria-label="Message"
                            name='message'
                            onChange={event => this.handleChange(event)}
                            value={this.state.message}
                        />
                    </InputGroup>
                    <br />
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    };
}

export default AddMessage;

