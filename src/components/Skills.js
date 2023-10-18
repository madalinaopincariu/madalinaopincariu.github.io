import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/cer.png"
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <h5>Assembly</h5>
                                </div>
                                <div className="item">
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <h5>JavaScript, HTML, CSS</h5>
                                </div>
                                <div className="item">
                                    <h5>Linux</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>

                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section >
    )
}