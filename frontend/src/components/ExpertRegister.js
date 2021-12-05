import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { addExpert } from "../apis/crud";

const ExpertRegister = () => {
    var user = JSON.parse(localStorage.getItem("user"));

    const saveExpert = (values) => {
        values.preventDefault();

        const expert = {
            name: values.target[0].value,
            location: values.target[1].value,
            cel: values.target[2].value,
            DNI: values.target[3].value,
            bio: values.target[4].value,
            contactLink: values.target[5].value,
            occupation: values.target[6].value,
            photoUrl: user.photoUrl,
            id: user.uid,
        };

        addExpert(expert, (res) => {
            console.log(res);
            if (res === "Success") {
                user.flagNewUser = false;
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "http://localhost:3000/home";
                console.log('Posteo exitoso!');
            } else {
                alert("Something went wrong, try again");
            }
        });
    };

    return (
        <>
            <Container >
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Form onSubmit={saveExpert}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>Location</Form.Label>
                                <Form.Select>
                                    <option>Select a location</option>
                                    <option value="chia">Chia</option>
                                    <option value="norte">Norte</option>
                                    <option value="occidente">Occidente</option>
                                    <option value="centro">Centro</option>
                                    <option value="sur">Sur</option>
                                    <option value="soacha">Soacha</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cel">
                                <Form.Label>Cell phone</Form.Label>
                                <Form.Control type="tel" placeholder="Enter your cell phone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="DNI">
                                <Form.Label>DNI</Form.Label>
                                <Form.Control type="text" placeholder="Enter your DNI" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bio">
                                <Form.Label>Biography</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter your biography"
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contactLink">
                                <Form.Label>Contact Link</Form.Label>
                                <Form.Control type="text" placeholder="Enter your contact link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="occupation">
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control type="text" placeholder="Enter your occupation" />
                            </Form.Group>
                            <Row>
                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>
                            </Row>
                            <br />
                            <br />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ExpertRegister;