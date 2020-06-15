import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class ShowPost extends Component {
    render() {
        const posts = this.props.posts
        const match = this.props.match
        const matchId = parseInt(match.params.postId)
        const post = posts.find(post => post.id === matchId)
        console.log(post)
        return (
            <div className="ViewPost" >
                <Card >
                    <Card.Img variant="top" src={post.image + '?&fit=crop&w=300&h=150&q=80'} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.message}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
        )
    };
}



export default ShowPost;

