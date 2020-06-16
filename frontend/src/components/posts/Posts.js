import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {
    
    postList = () => {

        if (this.props.floaty === true) {
            let position
            let delay
            let positionArray = ['1%', '21%', '41%', '61%', '81%', '1%', '21%', '41%', '61%', '81%', '1%', '21%', '41%', '61%', '81%']
            let delayArray = ['12s', '4s', '16s', '8s', '0s', '32s', '24s', '36s', '28s', '20s', '52s', '44s', '56s', '48s', '40s']
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
        console.log('Adding Search Posts')
        return (
            <React.Fragment>
                {this.postList()}
            </React.Fragment>
        )
    };
}

export default Posts;
