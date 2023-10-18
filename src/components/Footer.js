import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo12.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/github-icon.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/madalina-opincariu-94b4ab239/"><img src={navIcon1} /></a>
                            <a href="https://www.facebook.com/opincariu.madalina/"><img src={navIcon2} /></a>
                            <a href="https://github.com/madalinaopincariu"><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}