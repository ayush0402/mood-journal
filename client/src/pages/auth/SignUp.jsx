import { useState } from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import sign from "../../assets/signup.svg";
import NavigationBar from "../../components/NavigationBar";
import { useUserAuth } from "../../contexts/UserAuthContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useUserAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(name, email, password);
      navigate("/dashboard/write-new");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="custom-login-box">
        <Container style={{ paddingTop: 15 }}>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12} className="signup-form">
              <div className="custom-login-card-border"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">
                      MoodJournal
                    </h2>
                    <p className=" mb-4">Create a new account!</p>
                    {error ? <Alert variant="danger">{error}</Alert> : ""}
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ayush Kumar"
                            onChange={(event) => setName(event.target.value)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                          />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                        </Form.Group>

                        <div className="d-grid">
                          <Button type="submit">Sign Up</Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account?{" "}
                          <NavLink
                            to="/login"
                            style={{ color: "#F68989" }}
                            className="fw-bold"
                          >
                            Log In
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8} lg={6} xs={12}>
              <img src={sign} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
