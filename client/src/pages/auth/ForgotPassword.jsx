import { Form, Button, Container, Card } from "react-bootstrap";
import { useState } from "react";
import { useUserAuth } from "../../contexts/UserAuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
  };

  return (
    <>
      {/* // TODO: improve this UI */}
      <Container style={{ paddingTop: 15 }}>
        <Card className="shadow">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ForgotPassword;
