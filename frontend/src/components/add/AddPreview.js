import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

class AddPreview extends Component {

    handleClick = (post) => {
        post = {
            title: post.title,
            message: post.message,
            image: post.image
        }
        return this.props.onSubmit(post)
    }


    render() {
        const { post } = this.props

        const cardstyle = {
            width: '300px',
        }

        return (
            <div>
                <h2>New Post Preview</h2>
                <h4>Add Post If You Are Happy With Your Content!</h4>
                <br />
                <Card>
                    <Card.Img variant="top" src={post.image + '?&fit=crop&w=300&h=150&q=80'} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.message}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="primary" onClick={this.handleClick(post)}>Add Post</Button>
            </div>
        )
    };
}

export default AddPreview;

