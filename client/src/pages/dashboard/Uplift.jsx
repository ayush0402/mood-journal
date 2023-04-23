import DashboardLayout from "../../components/DashboardLayout";
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import { Navlink, useNavigate } from 'react-router-dom';
import MeditationUplift from "../../assets/MeditationUplift.svg";
import Psychologist from "../../assets/Psychologist.svg";
import Quotes from "../../components/Quotes";


const Uplift = () => {
  let navigate = useNavigate();

  let goMeditate = () => {
    navigate('/dashboard/uplift/meditate');
  }

  return (
    <>
      <DashboardLayout>
        <Container className="uplift">
          <Row className="d-flex justify-content-center align-items-center uplift-row">
            <Col>
              <img src={MeditationUplift} className="img-fluid" alt="" />
            </Col>
            <Col>
              <h2>Guided Meditation</h2>
              <p>Guided meditation is a form of meditation that involves listening to the voice of a trained guide or teacher who provides instructions and suggestions to help you relax and focus your mind. It is often used as a technique for reducing stress, promoting relaxation, and cultivating mindfulness.

                During a guided meditation session, you are typically asked to sit or lie down in a comfortable position and close your eyes.</p>
              <Button onClick={goMeditate}>Meditate</Button>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Quotes />
          </Row>
          <Row className="d-flex justify-content-center align-items-center uplift-row">
            <Col>
              <h2>Therapist Bot</h2>
              <p>A therapist bot is a type of conversational agent or chatbot designed to provide mental health support and counseling to individuals in need. These bots use natural language processing (NLP) and machine learning (ML) techniques to understand user input and generate responses that are empathetic, non-judgmental, and supportive.</p>
              <Button>Therapist Bot</Button>
            </Col>
            <Col>
              <img src={Psychologist} className="img-fluid" alt="" />
            </Col>
          </Row>
          
        </Container>
      </DashboardLayout>
    </>
  );
};

export default Uplift;
