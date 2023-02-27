import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    // handleValidation();
  };

  return (
    <div className="custom-login-box">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="custom-login-card-border"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">MoodJournal</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={loginSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button type="submit">Login</Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <NavLink
                          to="/signup"
                          style={{ color: "#F68989" }}
                          className="fw-bold"
                        >
                          Sign Up
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
                <div>or</div>
                <Button>{<BsGoogle />}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
