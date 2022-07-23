import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
        <Container className="poke-footer">
            <Row>
                <Col className="py-5">
                    Copyright & copy: Eike & Yegor Team!
                </Col>
            </Row>
        </Container>
    </footer>
  )
};

export default Footer;
