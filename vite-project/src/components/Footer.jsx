import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
function Footer() {
    return (

        <footer className="py-3 bg-light mt-auto">
            <Container>
                <Row>
                    <Col md={4}>
                        <Link to='/'>
                            <img src="/logo.png" alt="ByteHorizon logo" height="130" />
                        </Link>
                    </Col>
                    <Col md={4} className="flex">
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Pricing</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                    <Col md={4} className="d-flex">
                        <p className="my-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula In rutrum posuere risus eu congue.
                        </p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;