import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class Post extends Component {
    render() {
        
        let position = this.props.position
        let delay = this.props.delay
        const { post } = this.props;

        const cardstyle = {
            width: '300px',
            left: position,
            'animation-delay': delay
        }
        console.log(cardstyle)

        return (
            <Card className={this.props.classes} style={cardstyle}>
                <Card.Img variant="top" src={post.image + '?&fit=crop&w=300&h=150&q=80'} />
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
