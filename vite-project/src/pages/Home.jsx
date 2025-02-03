import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiServerNetwork, mdiCloudOutline, mdiSecurity, mdiSpeedometer, mdiHelpCircle, mdiChevronDoubleRight, mdiAbugidaDevanagari } from "@mdi/js";

function Home() {
    const features = [
        { title: <span><strong><span className="highlight">Reliable</span> Cloud Storage</strong></span>, description: "consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices.", icon: mdiSpeedometer },
        { title: <span><strong><span className="highlight">Instant</span> Scalability</strong></span>, description: "Curabitur eu ligula laoreet, consequat erat et, auctor ligula.", icon: mdiSecurity },
        { title: <span><strong><span className="highlight">Military-Grade</span> Security</strong></span>, description: "In rutrum posuere risus eu congue. In mattis vehicula libero et dignissim.", icon: mdiServerNetwork },
        { title: <span><strong><span className="highlight">Effortless</span> Data Management</strong></span>, description: "Maecenas tincidunt elit leo, rhoncus eleifend odio ultrices nec.", icon: mdiHelpCircle },
        { title: <span><strong><span className="highlight">Global</span> Data Accessibility</strong></span>, description: "Aliquam vestibulum quis sem at aliquam. Morbi quis erat non nunc volutpat blandit.", icon: mdiSpeedometer },
        { title: <span><strong><span className="highlight">Automated</span> Backups</strong></span>, description: "Nam eget vulputate metus, a posuere lorem Morbi quis erat.", icon: mdiAbugidaDevanagari },
    ];

    const services = [
        { title: <strong>Lorem ipsum dolor sit amet</strong>, description: "Aenean pulvinar ipsum sagittis tincidunt cursus Morbi quis erat.", icon: mdiChevronDoubleRight },
        { title: <strong>Lorem ipsum dolor sit amet</strong>, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi quis erat.", icon: mdiHelpCircle },
        { title: <strong>Lorem ipsum dolor sit amet</strong>, description: "Aenean pulvinar ipsum sagittis tincidunt cursus Morbi quis erat.", icon: mdiCloudOutline },
        { title: <strong>Lorem ipsum dolor sit amet</strong>, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi quis erat.", icon: mdiServerNetwork },
        { title: <strong>Lorem ipsum dolor sit amet</strong>, description: "Aenean pulvinar ipsum sagittis tincidunt cursus Morbi quis erat.", icon: mdiSecurity },

    ];

    return (
        <>

            <div className="banner hero text-center py-5 bg-light" >
                <Container><Row><Col lg={4} className="pl-lg-10 my-5 text-center">
                    <h1><span className="text-white">Object Storage</span></h1>
                    <h3><span className="text-white"><strong>For all data needs</strong></span></h3>

                </Col>
                </Row>
                </Container>
            </div>

            <div className="py-5 bg-light">
                <Container>
                    <h2 className="text-center">Why Choose Us?</h2>

                    <Row className="justify-content-center">

                        {features.map((feature, index) => (
                            <Col lg={4
                            } key={index} className="text-center mb-4">

                                <Card className="text-center">
                                    <Card.Body>
                                        <Icon path={feature.icon} size={"60px"} />
                                        <h5>{feature.title}</h5>
                                        <p>{feature.description}</p>

                                    </Card.Body>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <Container className="my-5">
                <Row className="align-items-center flex-md-row-reverse">
                    <Col md={6} className="text-md-start text-center">
                        <h2>Our <span className="highlight">Commitment</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet.</p>
                    </Col>
                    <Col md={6} className="text-center">
                        <img src="/storage.jpg" alt="Storage" className="img-fluid rounded shadow" />
                    </Col>
                </Row>
            </Container>

            <div className="bg-light py-5">
                <Container>
                    <h2 className="text-center mb-4">Our Services</h2>
                    <Row className="justify-content-center">
                        {services.map((service, index) => (
                            <Col lg={4} key={index} className="mb-4">
                                <Card className="text-center">
                                    <Card.Body>
                                        <Icon path={service.icon} size={"60px"} />
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <a href="#" className="btn btn-primary-outline btn-custom">View Options</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className="text-center py-5">
                <Container>
                    <h2><strong>Get Started <span className="highlight">Today</span></strong></h2>
                    <p>Choose the perfect hosting plan for your needs.</p>
                    <a href="#" className="btn btn-custom">View Plans & Pricing <Icon path={mdiChevronDoubleRight} size="20px" /></a>
                </Container>
            </div >
        </>
    );
}

export default Home;