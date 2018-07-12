import _ from 'lodash';
import React, { Component } from 'react';
import ReactStars from 'react-stars'
import { connect } from 'react-redux';
import { fetchCameras, addToCart } from '../actions';
import { bindActionCreators } from 'redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input
} from 'reactstrap';


class CameraList extends Component {
    state = {
        term: ''
    }

    componentDidMount() {
        this.props.fetchCameras();
    }

    onInputChange(term) {
        this.setState({ term })
    }

    showCameras(camera) {
        const saleStyle = {
            color: '#3CC47C'
        }
        return (
            <div key={camera.id}>
                <Card>
                    <CardImg top width="100%" src={camera.picture} alt="" />
                    <CardBody>
                        <CardTitle>{camera.name}</CardTitle>
                        <CardSubtitle>{camera.price}</CardSubtitle>
                        {
                            camera.onSale ? <CardText style={saleStyle} >$$ ON SALE $$</CardText> : null
                        }
                        <Button
                            onClick={() => this.props.addToCart(camera)}>
                            Add to Cart
                        </Button>
                        <ReactStars
                            className="stars"
                            count={camera.rating}
                            size={30}
                            color1={'#ffd700'}
                        />
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderCameras() {
        if (this.state.term !== '') {
            return _.map(this.props.cameras, camera => {
                if (camera.name.toLowerCase().includes(this.state.term.toLowerCase())) {
                    return this.showCameras(camera)
                }

            })
        }

        return _.map(this.props.cameras, camera => {
            return this.showCameras(camera)
        })
    }

    render() {
        return (
            <div>
                <Input onChange={e => this.onInputChange(e.target.value)} value={this.state.term} placeholder="Search..." />
                <hr />
                {this.renderCameras()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { cameras: state.cameras }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCameras: fetchCameras,
        addToCart: addToCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraList)