import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

class Post extends Component {
    render() {
        let classes = "Post"

        if (this.props.classes) {
            classes = this.props.classes
        }
        let position = this.props.position
        let delay = this.props.delay
        let animation = this.props.animation
        const { post } = this.props;

        const cardstyle = {
            left: position,
            animation: animation,
            animationDelay: delay
        }
        console.log(cardstyle)

        return (
            <Card className={classes} style={cardstyle} >
                <Link to={`posts/${post.id}`} post={post} >
                    <Card.Img variant="top" src={post.image + '?&fit=crop&w=300&h=150&q=80'} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.message}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Link>
            </Card>
        )
    };
}

export default Post;
