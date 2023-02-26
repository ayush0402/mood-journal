import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavigationBar from '../components/NavigationBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import signup_image from "../assets/signup_svg.svg"
import { NavLink } from 'react-router-dom';


export default function SignUp() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <Col className="signup-form-section" md="4">
                        <h3>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
                        </Form>
                    </Col>
                    <Col className="signup-img-section" md="8">
                        <img src={signup_image} alt="SignUp_Image" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
