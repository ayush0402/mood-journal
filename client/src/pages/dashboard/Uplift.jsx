import DashboardLayout from "../../components/DashboardLayout";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MeditationUpliftImg from "../../assets/MeditationUplift.svg";
import PsychologistImg from "../../assets/Psychologist.svg";
import Quotes from "../../components/Quotes";

const Uplift = () => {
  let navigate = useNavigate();

  const goMeditate = () => {
    navigate("/dashboard/uplift/meditate");
  };
  const goTherapy = () => {
    navigate("/dashboard/uplift/therapy");
  };

  return (
    <>
      <DashboardLayout>
        <Container className="uplift">
          <Row className="d-flex justify-content-center align-items-center uplift-row">
            <Col xs={12} md={6}>
              <img src={MeditationUpliftImg} className="img-fluid" alt="" />
            </Col>
            <Col xs={12} md={6}>
              <h2>Guided Meditation</h2>
              <p>
                Guided meditation is a form of meditation that involves
                listening to the voice of a trained guide or teacher who
                provides instructions and suggestions to help you relax and
                focus your mind. It is often used as a technique for reducing
                stress, promoting relaxation, and cultivating mindfulness.
                During a guided meditation session, you are typically asked to
                sit or lie down in a comfortable position and close your eyes.
              </p>
              <Button onClick={goMeditate}>Meditate</Button>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mt-4">
            <Quotes />
          </Row>
          <Row className="d-flex justify-content-center align-items-center uplift-row">
            <Col xs={12} md={6}>
              <h2>Therapist Bot</h2>
              <p>
                A therapist bot is a type of conversational agent or bot
                designed to provide mental health support and counseling to
                individuals in need. We leverage ChatGPT to help you out in most
                human way possible.
              </p>
              <Button onClick={goTherapy}>Therapist Bot</Button>
            </Col>
            <Col xs={12} md={6}>
              <img src={PsychologistImg} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </DashboardLayout>
    </>
  );
};

export default Uplift;
