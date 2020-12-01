import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {
    
    postList = () => {
        if (this.props.floaty === true) {
            let position
            let delay
            let positionArray = ['1%', '21%', '41%', '61%', '81%', '1%', '21%', '41%', '61%', '81%', '1%', '21%', '41%', '61%', '81%']
            let delayArray = ['0s', '8s', '16s', '4s', '12s', '20s', '28s', '36s', '24s', '40s', '52s', '48s', '56s', '44s', '32s']
            let animation = 'move 50s linear infinite'
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
