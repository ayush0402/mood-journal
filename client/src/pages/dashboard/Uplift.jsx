import DashboardLayout from "../../components/DashboardLayout";
import {Row, Col, Button} from 'react-bootstrap';
import {Navlink, useNavigate} from 'react-router-dom';

const Uplift = () => {
  let navigate = useNavigate();

  let goMeditate = () => {
    navigate('/dashboard/uplift/meditate');
  }
  
  return (
    <>
      <DashboardLayout>
        <Row>
          <Col>
            <Button onClick={goMeditate}>Meditate</Button>
          </Col>
          <Col>
            <h3>Meditation link</h3>
          </Col>
        </Row>
        <Row>
        <Col>
            <h3>Meditation img</h3>
          </Col>
          <Col>
            <h3>Meditation link</h3>
          </Col>
        </Row>
        <Row>
        <Col>
            <h3>Meditation img</h3>
          </Col>
          <Col>
            <h3>Meditation link</h3>
          </Col>
        </Row>
      </DashboardLayout>
    </>
  );
};

export default Uplift;
