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
        
        if (post.image) {
            post.image = post.image + '?&fit=crop&w=300&h=150&q=80'
        }

        return (
            <div className="PreviewContainer">
                <h2>Preview</h2>
                <h6>Add Post If You Are Happy With Your Content!</h6>
                <br />
                <Card className='PreviewCard'>
                    <Card.Img variant="top" src={post.image} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.message}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Button variant="primary" onClick={() => this.handleClick(post)}>Add Post</Button>
            </div>
        )
    };
}

export default AddPreview;

