import { useNavigate } from "react-router-dom";
import notfound_image from "../assets/404.svg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NotFound = () => {
  let navigate = useNavigate();

  let goHome = () => {
    navigate("/");
  };

  return (
    <Container className="notfound-container">
      <img src={notfound_image} alt="404" className="notfound-image" />
      <h3>Are you lost? Let us get you back to home.</h3>
      <Button onClick={goHome}>Go Home</Button>
    </Container>
  );
};

export default NotFound;
