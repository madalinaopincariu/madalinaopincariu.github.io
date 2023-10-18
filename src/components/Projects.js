import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const ComponentA = () => {
        return (
            <div>
                <p>It is a back-end app in C++ using list of generic elements with array representation.</p>
                <p>Purpose: master and utilize object-oriented programming principles and data structures.</p>
                <p>Main functionalities: add, modify and delete users; send and receive friend requests and unfriend other users;  send messages from a user to another. </p>
            </div>
        );
    };

    const ComponentB = () => {
        return (
            <div>
                <p>I created a network in Cisco Packet Tracer with a switch, routers, subnetworks with computers, a laptop, a smartphone, a Web server, a DHCP Server and a DNS server.</p>
                <p>Purpose: meticulously computed all the IP addresses from the provided data; establishing connections and architecting a fully operational network infrastructure.</p>
                <p>Links: https://www.youtube.com/watchv=e90PDDQnz0Q https://www.youtube.com/watch? v=RgzTBvS1vOo</p>
            </div>
        );
    };

    const ComponentC = () => {
        return (
            <div>
                <p>I created a robot for Netflix in Automation 360.</p>
                <p>Purpose:  acquire and apply automation proficiency and and process optimization.</p>
                <p>Main functionalities: selects my profile, accesses the movies page and chooses “Documentaries” from genres; scrolls down to look through movies, clicks them and while watching each trailer waits a couple of seconds, skips it and closes the window or adds to “My list” and closes the window or plays the movie.</p>
                <p>Link:  http://www.dropbox.com/s/3n149k7xw8cvp3s/robot%20Netflix.mkv?dl=0</p>
            </div>
        );
    };


    const [activeComponent, setActiveComponent] = useState(null);

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Welcome to my project showcase. Here, I've highlighted some of my most interesting and significant projects. While these projects reflect my passion for IT, there's much more in my portfolio. I'm constantly creating and innovating, so I hope you enjoy this glimpse into my work.</p>
                                </div>}
                        </TrackVisibility>
                        <Nav variant="pills" className="button mb-5 justify-content-center align-items-center">
                            <button onClick={() => handleComponentChange(<ComponentA />)}>Social Media Project</button>
                            <button onClick={() => handleComponentChange(<ComponentB />)}>Network Project</button>
                            <button onClick={() => handleComponentChange(<ComponentC />)}>Automation Project</button>
                            <div className="text">
                                {activeComponent}
                            </div>
                        </Nav>

                    </Col>
                </Row>
            </Container>
        </div >
    );
};