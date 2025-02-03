import Icon from '@mdi/react';
import { mdiCheck, mdiCloudOutline, mdiServerSecurity, mdiDatabaseOutline, mdiNetwork, mdiServerPlus } from '@mdi/js';
import { Card, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Services() {
    const serviceList = [
        {
            name: <span><strong><span className="highlight">Reliable</span> Cloud Storage </strong> </span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices.',
            icon: mdiCloudOutline,
        },
        {
            name: <span><strong><span className="highlight">Instant</span> Scalability</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices.',
            icon: mdiServerSecurity,
        },
        {
            name: <span><strong><span className="highlight">Military-Grade</span> Security</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices.',
            icon: mdiServerPlus,
        },
        {
            name: <span><strong><span className="highlight">Effortless</span> Data Management</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices.',
            icon: mdiNetwork,
        },
        {
            name: <span><strong><span className="highlight">Global</span> Data Accessibility</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices.',
            icon: mdiDatabaseOutline,
        },
        {
            name: <span><strong><span className="highlight">Automated</span> Backups</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices.',
            icon: mdiCheck,
        },
    ];

    return (
        <>
            <Container className="text-center py-5">
                <h1><strong>Services</strong></h1>

                <Row className="justify-content-center">
                    {serviceList.map((service, index) => (
                        <Col lg={4} key={index} className='mb-4'>
                            <Card>
                                <Card.Body>
                                    <Icon path={service.icon} size="60px"></Icon>
                                    <h3>{service.name}</h3>
                                    <p>{service.details}</p>
                                    <a href="#" className="btn btn-custom">Explore</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <section className='bg-light py-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={7}>
                            <h2><strong>Why Choose <span className="highlight">Byte</span>Horizon?</strong></h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula. In rutrum posuere risus eu congue. In mattis vehicula libero et dignissim. Maecenas tincidunt elit leo, rhoncus eleifend odio ultrices nec.</p>
                            <p>Aliquam vestibulum quis sem at aliquam. Morbi quis erat non nunc volutpat blandit. Nam eget vulputate metus, a posuere lorem Vivamus volutpat odio eu velit aliquam, sit amet auctor quam rutrum. Morbi tellus dui, tincidunt a dui et, molestie euismod tellus.                     </p>
                        </Col>
                        <Col lg={3} className='d-flex'>
                            <ul className="list-unstyled my-auto">
                                <li><Icon path={mdiCheck} className='text-success' size="22px"></Icon> 99.9% Uptime Guarantee</li>
                                <li><Icon path={mdiCheck} className='text-success' size="22px"></Icon> 24/7 Support</li>
                                <li><Icon path={mdiCheck} className='text-success' size="22px"></Icon> Top Tier Security</li>
                                <li><Icon path={mdiCheck} className='text-success' size="22px"></Icon> 100% Scalabe</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-white py-5">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={3} className='d-flex justify-content-center'>

                            <img src="/infra.jpg" alt="Infrastructuur" className="img-fluid rounded shadow" />
                        </Col>

                        <Col lg={6} >

                            <h2 className="text-center mt-5"><strong><span className="highlight">Custom Storage</span> Solutions For Unique Environments</strong></h2>
                            <p className="text-center mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula. In rutrum posuere risus eu congue. In mattis vehicula libero et dignissim. Maecenas tincidunt elit leo, rhoncus eleifend odio ultrices nec.                            </p>
                            <p className="text-center mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    );
}

export default Services;
