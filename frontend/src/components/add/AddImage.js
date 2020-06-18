import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap'

class AddImage extends Component {

    handleClick = (event) => {
        let image = event.target.id
        return this.props.onImageSelect(image)  
    }

    renderImages = images => {
        return images.map(image => {
            // console.log(image)
            return (
                <Card  key={image.id} onClick={event => this.handleClick(event)} >
                    <Card.Img variant="top" id={image.id} src={image.urls.raw + '?&fit=crop&w=300&h=150&q=80'} />
                </Card>
            )
        })
    }

    render() {
        const images = this.props.images

        return (
            <div>
                <h2>Image</h2>
                <h6>Select The Image You Would Like To Use</h6>
                <CardColumns>
                    {this.renderImages(images)}
                </CardColumns>
            </div>
        )
    };
}

export default AddImage;

