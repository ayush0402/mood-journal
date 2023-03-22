import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

const NavigationBar = () => {
  let [navbarScroll, setNavbarScroll] = useState(false);
  const { user } = useUserAuth();

  window.addEventListener("scroll", () => {
    setNavbarScroll(window.scrollY >= 80 ? true : false);
  });

  return (
    <Navbar
      className={navbarScroll ? "custom-navbar scrolled" : "custom-navbar"}
      expand="lg"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          className={`custom-navbar-brand ${navbarScroll ? "scrolled" : ""}`}
          to="/"
        >
          MoodJournal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={`custom-navbar-link ${navbarScroll ? "scrolled" : ""}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact-us"
              className={`custom-navbar-link ${navbarScroll ? "scrolled" : ""}`}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              className={`custom-navbar-link ${navbarScroll ? "scrolled" : ""}`}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/signup"
              className={`custom-navbar-link ${navbarScroll ? "scrolled" : ""}`}
            >
              Signup
            </Nav.Link>
            {/* While signin on home Dashboard button on navbar works but not changing url. */}
            {user ? (
              <Nav.Link
                as={NavLink}
                to="/dashboard/write-new"
                className={`custom-navbar-link ${
                  navbarScroll ? "scrolled" : ""
                }`}
              >
                Dashboard
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
