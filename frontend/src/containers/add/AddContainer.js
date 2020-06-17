import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../../actions/fetchImages';
import { newPost } from '../../actions/newPost';
import NavContainer from '../nav/NavContainer'
import { Carousel } from 'react-bootstrap'
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
        direction: 'next'
        // date: 
        // vote: 
        // id: 
    }

    handleSelectButton(index, direction) {
        let newIndex = index + 1;
        this.setState({
            index: newIndex,
            direction: direction
        });
    }

    handleSearch = theme => {
        this.props.fetchImages(theme)
        this.handleSelectButton(this.state.index, 'next')
    }


    handleImageSelect = props => {
        console.log(`Image ID Selected: ${props}`)
        let selected = this.props.images.find(image => image.id===props )
        let url = selected.urls.raw
        this.setState({
            image: url
        })
        this.handleSelectButton(this.state.index, 'next')
    }

    handleMessageSubmit = props => {
        this.setState({
            title: props.title,
            message: props.message
        })
        this.handleSelectButton(this.state.index, 'next')
    }

    handleSubmit = props => {
        console.log(props)
        // this.props.newPost(props)
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <NavContainer />
                <Carousel className="AddContainer" interval={null} controls={false} activeIndex={this.state.index} direction={this.state.direction} onSelect={(i, e) => this.handleSelect(i, e)} >
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
                </React.Fragment>
        )
    };
}

function mapDispatchToProps(dispatch) {
    return { fetchImages: () => dispatch(fetchImages()), newPost: () => dispatch(newPost()) }
}

function mapStateToProps(state) {
    return { images: state.images }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddContainer)