import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {
        
    postList = () => {

        if (this.props.floaty === true) {
            let position
            let delay
            let positionArray = ['1%', '21%', '41%', '61%', '81%', '1%', '21%', '41%', '61%', '81%', '1%', '21%', '41%', '61%', '81%']
            let delayArray = ['0s', '2s', '4s', '2s', '0s', '4.5s', '6.5s', '8.5s', '6.5s', '4.5s', '9s', '11s', '13s', '11s', '9s']
            let i = 0
            return this.props.posts.map(post => {
                if (i < 15) {
                    position = positionArray[i]
                    delay = delayArray[i]
                    i++
                }
                else {
                    i = 0
                }

                return <Post key={post.id} post={post} classes={this.props.classes} position={position} delay={delay} />
            })

        } else {
            return this.props.posts.map(post => <Post key={post.id} post={post} classes={this.props.classes} />)
        }

        
    }
    

    render() {

        return (
            <div className="Posts">
                {this.postList()}
            </div>
        )
    };
}

export default Posts;
