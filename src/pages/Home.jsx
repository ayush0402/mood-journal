import ControlledCarousel from "../components/ControlledCarousel";
import NavigationBar from "../components/NavigationBar";
import { Button, Container, Row, Col } from "react-bootstrap";
import header_image from "../assets/smiley_calendar.png";
import feature_image from "../assets/smiley_calendar.png";
import { useNavigate } from "react-router-dom";

const Home = ({ testimonies }) => {
  let navigate = useNavigate();
  
  let goSignUp = ()=>{
    navigate("/signup");
  }

  return (
    <div className="home-page">
      <NavigationBar />
      <div className="header">
        <Container className="header-container">
          <Row>
            <Col className="header-text">
              <h1>MoodJournal</h1>
              <p>A digital way to track and uplift your mood.</p>
              <div className="header-buttons">
                <Button>Log In</Button>
                <Button style={{ marginLeft: 10 }} onClick={goSignUp}>Sign Up</Button>
              </div>
            </Col>
            <Col>
              <img
                src={header_image}
                className="header-image"
                alt="Smiley Calendar"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <section className="features">
        <h2>Features</h2>
        <Row className="features-list">
          <Col className="feature-item">
            <img src={feature_image} alt="feature_1" />
            <h3>Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus voluptatem rerum beatae quae alias iste tempora.
            </p>
          </Col>
          <Col className="feature-item">
            <img src={feature_image} alt="feature_2" />
            <h3>Feature 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus voluptatem rerum beatae quae alias iste tempora.
            </p>
          </Col>
          <Col className="feature-item">
            <img src={feature_image} alt="feature_3" />
            <h3>Feature 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus voluptatem rerum beatae quae alias iste tempora.
            </p>
          </Col>
          <Col className="feature-item">
            <img src={feature_image} alt="feature_4" />
            <h3>Feature 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus voluptatem rerum beatae quae alias iste tempora.
            </p>
          </Col>
        </Row>
      </section>
      <section className="testimonials">
        <ControlledCarousel testimonies={testimonies} />
      </section>
      <section className="faqs">
        <h3>FAQs</h3>
      </section>
      <section className="footer">
        <h3>Footer</h3>
      </section>
    </div>
  );
};

export default Home;
