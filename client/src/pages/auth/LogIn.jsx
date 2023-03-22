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
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import login from "../../assets/login.svg";
import NavigationBar from "../../components/NavigationBar";
import { useUserAuth } from "../../contexts/UserAuthContext";

export default function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, signInWithGoogle } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // handleValidation();
    try {
      await logIn(email, password);
      navigate("/dashboard/write-new");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      // Returns Google Access Token. You can use it to access the Google API.
      await signInWithGoogle();
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
            <Col md={8} lg={6} xs={12} className="login-form">
              <div className="custom-login-card-border"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">
                      MoodJournal
                    </h2>
                    <p className=" mb-4">
                      Please enter your login and password!
                    </p>
                    {error ? <Alert variant="danger">{error}</Alert> : ""}
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit}>
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
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <NavLink
                              to="/forgot-password"
                              className="text-primary"
                            >
                              Forgot password?
                            </NavLink>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button type="submit">LogIn</Button>
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
                  <div className="box-separator text-center">
                    <p>
                      <span>OR</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <Button onClick={handleSignInWithGoogle}>
                      {<BsGoogle />}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <img src={login} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
