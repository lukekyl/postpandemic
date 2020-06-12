import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <Card className="Post" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.message}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        )
    };
}

export default Post;
