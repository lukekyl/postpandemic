import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmailShareButton } from "react-share";
import { addVote } from '../../actions/addVote';
import { Card, Row, Col } from 'react-bootstrap';
import { Heart, Send } from 'react-feather';

class ShowPost extends Component {
    state = {
        hearted: false
    }

    handleVote = post => {
        console.log('Voted!')
        this.props.addVote(post.id)
        this.setState({
            hearted: true
        })
    }

    handleShare = event => {
        console.log('Shared!')
    }

    render() {

        let heartFill = { fill: 'none' }
        if (this.state.hearted === true ){
            heartFill = {
                fill: 'red',
                color: 'red'
            }
        }

        const posts = this.props.posts
        const match = this.props.match
        const postId = parseInt(match.params.postId)
        const post = posts.find(post => post.id === postId)
        console.log(post)
        return (
            <div className="ViewPost" >
                <Card >
                    <Card.Img variant="top" src={post.image + '?&fit=crop&w=900&h=450&q=80'} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.message}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Row>
                            <Col ><Heart /> {post.vote}</Col>
                            <Col className='align-center' onClick={() => this.handleVote(post)} ><Heart style={heartFill} /></Col> 
                            <Col className='align-center' onClick={event => this.handleShare(event)} >
                                <EmailShareButton subject={'postpandemic: Message of Hope'} body={'Check out this post I found on postpandemic! Follow this link:'} separator={' '} url={window.location.href} >
                                <Send />
                                </EmailShareButton>
                            </Col> 
                            <Col className='align-right'>{post.date}</Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </div>
        )
    };
}

function mapDispatchToProps(dispatch) {
    return { addVote: (props) => dispatch(addVote(props)) }
}


export default connect(null, mapDispatchToProps)(ShowPost)

