import React from "react";
import styles from "./NavBar.module.css";
import {Navbar, Nav, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div className={styles.container}>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className={styles.nav}>
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="#home" className={styles.navlink}>HOME</Nav.Link>
                    <Nav.Link href="#about" className={styles.navlink}>ABOUT</Nav.Link>
                    <Nav.Link href="#skills" className={styles.navlink}>SKILLS</Nav.Link>
                    <Nav.Link href="#projects" className={styles.navlink}>PROJECTS</Nav.Link>
                    <Nav.Link href="#contact" className={styles.navlink}>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;