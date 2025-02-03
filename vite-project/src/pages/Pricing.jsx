import React from 'react';
import Icon from '@mdi/react';
import { mdiCheck, mdiCloudOutline, mdiServerSecurity, mdiDatabaseOutline, mdiNetwork, mdiServerPlus } from '@mdi/js';
import { Card, Row, Col, Container } from "react-bootstrap";

function Pricing() {
    const pricingList = [
        {
            name: <span><strong><span className="highlight">Basic</span> Plan</strong> </span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.',
            features: <strong>50 GB</strong>,
            icon: mdiCloudOutline,
        },
        {
            name: <span><strong><span className="highlight">Standard</span> Plan</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.',
            icon: mdiServerSecurity,
            features: <strong>51 GB</strong>,
        },
        {
            name: <span><strong><span className="highlight">Pro</span> Plan</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.',
            icon: mdiServerPlus,
            features: <strong>500 GB</strong>,
        },
        {
            name: <span><strong><span className="highlight">Enterprise</span> Plan</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.',
            icon: mdiNetwork,
            features: <strong>5000 GB</strong>,
        },
        {
            name: <span><strong><span className="highlight">Startup</span> Plan</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.',
            icon: mdiDatabaseOutline,
            features: <strong>55555 GB</strong>,
        }, {
            name: <span><strong><span className="highlight">Ultimate</span> Plan</strong></span>,
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas sed purus vel ultrices. Curabitur eu ligula laoreet, consequat erat et, auctor ligula.',
            icon: mdiDatabaseOutline,
            features: <strong>5000000 GB</strong>,
        },
    ];

    return (
        <Container className="text-center py-5">
            <h1><strong>Pricing</strong></h1>
            <Row className="justify-content-center">
                {pricingList.map((price, index) => (
                    <Col lg={4} key={index} className='mb-4'>
                        <Card className="bg-light">
                            <Card.Body>
                                <Icon path={price.icon} size="60px" />
                                <h3>{price.name}</h3>
                                <p>{price.details}</p>
                                <p>{price.features}</p>

                                <a href="#" className="btn btn-custom"><strong>View Options</strong></a>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Pricing;