import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
    return (
        <section>
            <Container className="py-5">
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <h1><strong>About <span className="highlight">Us</span></strong></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula. In rutrum posuere risus eu congue. In mattis vehicula libero et dignissim. Maecenas tincidunt elit leo, rhoncus eleifend odio ultrices nec.</p>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <Row className="align-items-center">
                    <Col md={6} className="text-md-end text-center">
                        <h2><strong>Who <span className="highlight">We Are</span></strong></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula. In rutrum posuere risus eu congue. In mattis vehicula libero et dignissim. Maecenas tincidunt elit leo, rhoncus eleifend odio ultrices nec.</p>
                    </Col>
                    <Col md={6} className="text-center">
                        <img src="/rack.jpg" alt="Datacenter" className="img-fluid rounded shadow" />
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <Row className="align-items-center flex-md-row-reverse">
                    <Col md={6} className="text-md-start text-center">
                        <h2><strong>Our <span className="highlight">Promise</span></strong></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.</p>
                    </Col>
                    <Col md={6} className="text-center">
                        <img src="/disk.jpg" alt="Disk" className="img-fluid rounded shadow" />
                    </Col>
                </Row>
            </Container>

            <div className="bg-light py-5">
                <Container>
                    <Row className="text-center">
                        <Col md={6}>
                            <h2><strong>What We <span className="highlight">Do</span></strong></h2>
                            <ul className="list-unstyled">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h2><strong>Why Choose <span className="highlight">ByteHorizon?</span></strong></h2>
                            <ul className="list-unstyled">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="text-center mt-4">
                        <a href="#" className="btn btn-custom">Explore Our Services</a>
                    </div>
                </Container>
            </div>

            <div className="py-5 text-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <h2><strong>Expand your<span className="highlight"> Horizon</span></strong></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula. In rutrum posuere risus eu congue. In mattis vehicula libero et dignissim. </p>
                            <a href="#" className="btn btn-custom">Contact Us</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default AboutUs;

