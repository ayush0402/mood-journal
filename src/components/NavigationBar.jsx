import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  let [navbarScroll, setNavbarScroll] = useState(false);

  window.addEventListener("scroll", () => {
    setNavbarScroll(window.scrollY >= 80 ? true : false);
  });

  return (
    <Navbar
      className={navbarScroll ? "custom-navbar scrolled" : "custom-navbar"}
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">MoodJournal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
