import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const FooterComponent = () => {
    return (<>
        <footer className="bg-nav text-dark ">
            <Container fluid>
                <Row>
                    <Col className="text-center py-3">
                        &copy; 2023 Your Company
                    </Col>
                </Row>
            </Container>
        </footer>
    </>)
}

export default FooterComponent