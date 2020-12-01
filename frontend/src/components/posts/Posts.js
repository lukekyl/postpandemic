import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {
    
    postList = () => {
        if (this.props.floaty === true) {
            let position
            let delay
            let positionArray = ['1%', '21%', '41%', '61%', '81%', '1%', '21%', '41%', '61%', '81%', '1%', '21%', '41%', '61%', '81%']
            let delayArray = ['0s', '4s', '8s', '2s', '6s', '10s', '14s', '18s', '12s', '20s', '26s', '24s', '28s', '22s', '16s']
            let animation = 'move 30s linear infinite'
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

                return <Post key={post.id} post={post} classes={this.props.classes} position={position} animation={animation} delay={delay} />
            })

        } else {
            console.log('Adding Search Posts')
            return this.props.posts.map(post => <Post key={post.id} post={post} classes={this.props.classes} />)
        }

        
    }
    

    render() {
        

        return (
            <React.Fragment>
                {this.postList()}
            </React.Fragment>
        )
    };
}

export default Posts;
