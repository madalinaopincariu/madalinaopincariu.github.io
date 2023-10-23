import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_vymlljm";
const TEMPLATE_ID = "template_y7qt3a6";
const PUBLIC_KEY = "q2gkP8g9ssfeyMZ9r";

export const Contact = () => {
    const formDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'Success',
                    title: 'Message sent successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.firsttName} placeholder="First Name" name="firstName" />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.lasttName} placeholder="Last Name" name="secondName" />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" value={formDetails.emaill} placeholder="Email Address" name="email" />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" value={formDetails.phonee} placeholder="Phone No." name="phone" />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" value={formDetails.messagee} placeholder="Message" name="message"></textarea>
                                                <button type="submit">Send</button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
