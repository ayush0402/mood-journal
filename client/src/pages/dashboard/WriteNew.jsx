import DashboardLayout from "../../components/DashboardLayout";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const WriteNew = () => {
  const { user } = useUserAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [visibility, setVisibility] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authorId = "";
    try {
      const authResponse = await axios.get("auth/get-user-by-email", {
        email: user.email,
      });
      authorId = authResponse.data[0]._id;
    } catch (error) {
      console.log("Error fetching user by email", error);
    }
    try {
      await axios.post("post/new", {
        title: title,
        content: content,
        visibility: visibility,
        author_id: authorId,
      });
    } catch (error) {
      console.log("Error posting post data to the server", error);
    }
  };

  return (
    <DashboardLayout>
      <Container className="write-new">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col className="login-form">
            <Card className="shadow">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="entryTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title for your entry"
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="textEntry">
                    <Form.Label>How was your day?</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="How was your day?"
                      rows={14}
                      onChange={(event) => setContent(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Check
                    className="public-toggle-switch"
                    type="switch"
                    id="custom-switch"
                    label="Public"
                    onChange={() => {
                      setVisibility(!visibility);
                    }}
                  />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default WriteNew;
