import DashboardLayout from "../../components/DashboardLayout";
import WaveRobot from "../../components/animations/WaveRobot";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";

const WriteNew = () => {
  const { user } = useUserAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [visibility, setVisibility] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let authorId = "";
    try {
      const authResponse = await axios.get("auth/get-user-by-email", {
        params: {
          email: user.email,
        },
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
    setTitle("");
    setContent("");
    alert("Post Submitted!");
  };

  return (
    <DashboardLayout>
      <div className="write-new">
        <Row>
          <Col xs={12} md={6}>
            <WaveRobot />
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            xs={12}
            md={6}
          >
            <TypeAnimation
              sequence={[
                "Hey there!",
                2000,
                "How did your day went today?",
                2000,
                "Tell me about it.",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </Col>
        </Row>
        <Row className="mt-4 d-flex justify-content-center align-items-center">
          <Col className="login-form">
            <Card className="shadow">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="entryTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      value={title}
                      type="text"
                      placeholder="Enter Title for your entry"
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="textEntry">
                    <Form.Label>How was your day?</Form.Label>
                    <Form.Control
                      value={content}
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
      </div>
    </DashboardLayout>
  );
};

export default WriteNew;
