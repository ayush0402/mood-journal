import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import AIRobot from "../../../components/animations/AIRobot";
import DashboardLayout from "../../../components/DashboardLayout";
import axios from "axios";

const Therapist = () => {
  const [content, setContent] = useState("");
  const [response, setResponse] = useState("What is bothering you?");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setResponse("Loading...");
      let res = await axios.post("/misc/therapy", {
        prompt: content,
      });
      setResponse(res.data.data);
    } catch (error) {
      console.log("error sending data to therapist bot", error);
    }
  };

  return (
    <>
      <DashboardLayout>
        <Container>
          <Row>
            <Col style={{ margin: "auto" }}>
              <AIRobot />
            </Col>
            <Col style={{ margin: "auto", fontSize: 20 }}>{response}</Col>
          </Row>
          <Card className="shadow  mt-5">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="textEntry">
                  <Form.Label>
                    Write about your problems, ask solutions or just vent out.
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="What is bothering you?"
                    rows={5}
                    onChange={(event) => setContent(event.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </DashboardLayout>
    </>
  );
};

export default Therapist;
