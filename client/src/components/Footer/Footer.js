import React, { Component } from "react";
import { Container, Row, Col, Image, Tooltip, OverlayTrigger } from "react-bootstrap";
import Logo from '../../assets/images/footer-logo.png'
import Instagram from '../../assets/images/instagram.png'
import './footer.css'

const Footer = () => {
    return (
        <Container className="footer">
            <Container>
                <Row className="content d-flex justify-content-between">
                    <Col sm={6}>
                        <div className="logo">
                            <img className="footer-logo" src={Logo} />
                            <span className="footer-title">Нежные чувства</span>
                        </div>
                        <div className="copyright">
                            &copy; Все права защищены. <br />Выполнено в рамках творческого проекта.
                        </div>
                    </Col>
                    <Col sm={2} className="info d-flex align-items-center flex-column justify-content-center">
                        <span className="media-title">Контакты</span>
                        <div className="media d-flex align-items-center">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Алина :3</Tooltip>}>
                                <a href="https://www.instagram.com/flawless.control/?utm_medium=copy_link" target="_blank"><Image src={Instagram} className="media-icon" /></a>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Олеся :3</Tooltip>}>
                                <a href="https://instagram.com/be1ieving_in_mirac1es/?utm_medium=copy_link" target="_blank"><Image src={Instagram} className="media-icon" /></a>
                            </OverlayTrigger>
                        </div>
                        <div className="number">
                            8 800 555 35 35
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;
