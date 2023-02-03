import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link} from "react-router-dom";
import styles from "./NavBar.module.css";

import "./NavBar.css";
import HomeButton from "../Home/HomeButton";

export default function NavBar() {
  return (
    <>
      <Navbar className={styles.NavBg} expand="md" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
              width="100"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto justify-content-center">
              <Nav.Link as={Link} to="/2023">
                2023
              </Nav.Link>
              <Nav.Link as={Link} to="/2024">
                2024
              </Nav.Link>
              <Nav.Link as={Link} to="/2025">
                2025
              </Nav.Link>
              <Nav.Link as={Link} to="/2026">
                2026
              </Nav.Link>
              <Nav.Link as={Link} to="/tba">
                TBA
              </Nav.Link>
              
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/Home">
                <HomeButton/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}
/*


*/
