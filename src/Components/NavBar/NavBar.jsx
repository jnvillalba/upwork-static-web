import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";

import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <Navbar className={styles.NavBg} expand="lg" variant="light">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}
/*


*/
