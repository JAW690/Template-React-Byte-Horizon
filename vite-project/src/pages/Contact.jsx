import { Container, Row, Col, Card } from "react-bootstrap";
import Icon from '@mdi/react';
import { mdiPhone, mdiEmailFast, mdiHeadset, mdiCreditCardOutline, mdiMapMarker, mdiShareVariant } from '@mdi/js';

const Contact = () => {
    const contactMethods = [
        {
            title: <span><span>Get in</span><span className="highlight"> Touch</span></span>,
            icon: mdiPhone,
            details: (
                <ul className="list-unstyled">
                    <li><strong>Phone:</strong> <a href="#">0800 1111</a></li>
                    <li><strong>Email:</strong> <a href="#">Lorem ipsum</a></li>
                    <li><strong>Live Chat:</strong> Available 24/7</li>
                </ul>
            )
        },
        {
            title: <span><span>Sales & General</span><span className="highlight"> Inquiries</span></span>,
            icon: mdiEmailFast,
            details: (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.</p>
            )
        },
        {
            title: <span><span>Technical</span><span className="highlight"> Support</span></span>,
            icon: mdiHeadset,
            details: (
                <ul className="list-unstyled">
                    <li><strong>Support Portal:</strong> <a href="#">Lorem ipsum</a></li>
                    <li><strong>Email:</strong> <a href="#">Lorem ipsum</a></li>
                    <li><strong>24/7 Assistance</strong></li>
                </ul>
            )
        },
        {
            title: <span><span>Billing</span><span className="highlight"> Support</span></span>,
            icon: mdiCreditCardOutline,
            details: (
                <ul className="list-unstyled">
                    <li><strong>Email:</strong> <a href="#">Lorem ipsum</a></li>
                    <li><strong>Hours:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.</li>
                </ul>
            )
        },
        {
            title: <span><span>Visit</span><span className="highlight"> Us</span></span>,
            icon: mdiMapMarker,
            details: (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.</p>
            )
        },
        {
            title: <span><span>Follow</span><span className="highlight"> Us</span></span>,

            icon: mdiShareVariant,
            details: (
                <ul className="list-unstyled">
                    <li><strong>Twitter:</strong> <a href="#">Lorem ipsum</a></li>
                    <li><strong>LinkedIn:</strong> <a href="#">Lorem ipsum</a></li>
                </ul>
            )
        }
    ];

    return (

        <Container className="text-center py-5">
            <h1><strong>Contact Us</strong></h1>

            <Row className="justify-content-center">
                {contactMethods.map((method, index) => (
                    <Col lg={4} key={index} className='mb-4'>
                        <Card>
                            <Card.Body>
                                <Icon path={method.icon} size="60px"></Icon>
                                <h3>{method.title}</h3>
                                <p>{method.details}</p>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
};

export default Contact;
