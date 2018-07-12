import React, { Component } from 'react';
import '../style/style.css';
import { Container, Row, Col } from 'reactstrap';

// Import components
import Header from './header'
import CameraList from './camera_list'
import Cart from './cart'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <CameraList />
          </Col>
          <Col md="4">
            <Cart route={this.props.match.path} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
