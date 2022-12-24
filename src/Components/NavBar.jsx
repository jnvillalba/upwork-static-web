import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Alert} from 'react-bootstrap'
import {Link, Outlet} from 'react-router-dom'
import styles from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    const navigate = useNavigate()
    const goToLogin = () => navigate('/Login')
  
  return (
    <>
    <Navbar className={styles.NavBg} expand="lg">
        <Container  >
            <Navbar.Brand as={Link} to="/"> 
                <img src="" width='100' alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Marvel</Nav.Link>
                <Nav.Link as={Link} to="/Categories">DC</Nav.Link>
                
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <Outlet></Outlet>
    </>
  )
}
