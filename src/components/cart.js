import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { removeFromCart } from '../actions'
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Cart extends Component {


    showCameras() {
        return _.map(this.props.camera, camera => {
            return (
                <div className="cart-item" key={camera.id} >
                    <h5>{camera.name}</h5>
                    <h6>{camera.price}</h6>
                    <Button
                        color="danger"
                        onClick={() => this.props.removeFromCart(camera.id)} >
                        Remove
                    </Button>
                </div>
            )
        })
    }


    render() {
        const { route } = this.props;
        const { camera } = this.props;

        const subTotal = Object.keys(camera).reduce(function (previous, key) {
            return previous + parseFloat(camera[key].price.replace(/,/g, '').slice(1));
        }, 0);

        const tax = Object.keys(camera).reduce(function (previous, key) {
            return previous + (.086 * parseFloat(camera[key].price.replace(/,/g, '').slice(1)))
        }, 0);

        return (
            <div className="cart" >
                <h2>YOUR CART: </h2>
                {route === '/' ? this.showCameras() : null }
                <sup>Subtotal: {`$${subTotal.toFixed(2)}`}</sup> <br />
                <sup>Tax: {`$${tax.toFixed(2)}`}</sup> <br />
                <b>Total:</b> {`$${(subTotal + tax).toFixed(2)}`} <br />
                {
                    route === '/' ?
                    <Link to="/cart" className="btn btn-success">Checkout</Link> 
                    : null
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        camera: state.addToCart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeFromCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)