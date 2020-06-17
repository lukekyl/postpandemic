import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../../actions/fetchImages';
import { newPost } from '../../actions/newPost';
import OtherNav from '../nav/OtherNav'
import { Carousel, Button } from 'react-bootstrap'
import AddTheme from '../../components/add/AddTheme'
import AddImage from '../../components/add/AddImage'
import AddMessage from '../../components/add/AddMessage'
import AddPreview from '../../components/add/AddPreview'

class AddContainer extends Component {
    state = {
        title: '',
        image: '',
        message: '',
        index: 0,
        direction: null,
        carouselItemCount: 4
        // date: 
        // vote: 
        // id: 
    }

    toggleCarousel = (direction) => {
        let index = this.state.index
        const [min, max] = [0, this.state.carouselItemCount - 1]

        if (direction === 'next') {
            index++

        }
        else if (direction === 'prev') {
            index--
        }

        if (index > max) {
            // at max, start from top
            index = 0
        }

        if (index < min) {
            // at min, start from max
            index = max
        }
        this.setState({
            direction,
            index
        })
    }

    handleSearch = theme => {
        this.props.fetchImages(theme)
        this.toggleCarousel('next')
    }


    handleImageSelect = props => {
        console.log(`Image ID Selected: ${props}`)
        let selected = this.props.images.find(image => image.id===props )
        let url = selected.urls.raw
        this.setState({
            image: url
        })
        this.toggleCarousel('next')
    }

    handleMessageSubmit = props => {
        this.setState({
            title: props.title,
            message: props.message
        })
        this.toggleCarousel('next')
    }

    handleSubmit = props => {
        console.log(props)
        this.props.newPost(props)
    }

    render() {
        console.log(this.state)
        return (
            <div className="AddContainer">
                <OtherNav />
                <Carousel className="AddCarousel" interval={null} controls={false} activeIndex={this.state.index} direction={this.state.direction} onSelect={(i, e) => this.handleSelect(i, e)} >
                    <Carousel.Item>
                        <AddTheme onSearch={this.handleSearch} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <AddImage images={this.props.images} onImageSelect={this.handleImageSelect} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <AddMessage onMessageSubmit={this.handleMessageSubmit} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <AddPreview post={this.state} onSubmit={this.handleSubmit} />
                    </Carousel.Item>
                </Carousel>
                <div className="CarouselNav">
                    <Button aria-hidden="true" variant="outline-primary" className="left" onClick={() => this.toggleCarousel('prev')} >Back</Button><Button aria-hidden="true" variant="outline-primary" className="right" onClick={() => this.toggleCarousel('next')} >Next</Button>
                </div>
            </div>
        )
    };
}

function mapDispatchToProps(dispatch) {
    return { fetchImages: (props) => dispatch(fetchImages(props)), newPost: (props) => dispatch(newPost(props)) }
}

function mapStateToProps(state) {
    return { images: state.images }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddContainer)