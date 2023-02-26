import ControlledCarousel from "../components/ControlledCarousel";
import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import header_image from "../assets/header_image.svg";
import feature1 from "../assets/typing.svg";
import feature2 from "../assets/calendar.svg";
import feature3 from "../assets/reading.svg";
import feature4 from "../assets/meditation.svg";
import contact_image from "../assets/contact.svg";
import { FaHeart } from "react-icons/fa";
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
            <Col xs="12" lg="6" className="header-text">
              <h1 className="header-brand">MoodJournal</h1>
              <p className="header-motto">
                A digital way to track and uplift your mood.
              </p>
              <div className="header-buttons">
                <Button>Log In</Button>
                <Button style={{ marginLeft: 10 }} onClick={goSignUp}>Sign Up</Button>
              </div>
            </Col>
            <Col xs="12" lg="6">
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
          <Col md="6" lg="3">
            <img src={feature1} alt="feature_1" className="feature-image" />
            <h3>Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus voluptatem rerum beatae quae alias iste tempora.
            </p>
          </Col>
          <Col md="6" lg="3">
            <img src={feature2} alt="feature_2" className="feature-image" />
            <h3>Feature 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus voluptatem rerum beatae quae alias iste tempora.
            </p>
          </Col>
          <Col md="6" lg="3">
            <img
              src={feature3}
              alt="feature_3"
              className="feature-image"
              style={{ marginTop: 60, marginBottom: 60 }}
            />
            <h3>Feature 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus voluptatem rerum beatae quae alias iste tempora.
            </p>
          </Col>
          <Col md="6" lg="3">
            <img src={feature4} alt="feature_4" className="feature-image" />
            <h3>Feature 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus voluptatem rerum beatae quae alias diste tempora.
            </p>
          </Col>
        </Row>
      </section>
      <section className="testimonials">
        <ControlledCarousel testimonies={testimonies} />
        <p className="testimonial-submit-text">
          Want to share your thoughts as well? Tell us more{" "}
          <NavLink className="testimonial-form-link" to="#">
            here.
          </NavLink>
        </p>
      </section>
      <section className="contact-section">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <img
                src={contact_image}
                alt="contact"
                className="contact-section-image"
              />
            </Col>
            <Col xs="12" md="6" className="contact-section-text">
              <h5>
                Have any queries, suggestions or complaints?<br></br>Reach out
                to us.
              </h5>
              <Button>Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="footer">
        Made with <FaHeart style={{ color: "#F68989" }} /> at IIIT Lucknow.
      </section>
    </div>
  );
};

export default Home;
