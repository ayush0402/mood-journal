import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import login from "../../assets/login.svg";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../config/firebase";

export default function LogIn() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // handleValidation();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // Logged In
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  const googleSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorCode, errorMessage);
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="custom-login-box">
      <Container style={{ paddingTop: 15 }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12} className="login-form">
            <div className="custom-login-card-border"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">MoodJournal</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={onSubmit}>
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
                  <Button onClick={googleSignIn}>{<BsGoogle />}</Button>
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
  );
}
