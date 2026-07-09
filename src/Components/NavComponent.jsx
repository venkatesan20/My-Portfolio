import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import logo from "../assets/vr-logo.png";

const NavComponent = () => {
  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>

        <BootstrapNavbar.Brand href="#home">
          <img src={logo} alt="VR Logo" className="logo-img" />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>

            <Nav.Link href="#skills">Skills</Nav.Link>

            <Nav.Link href="#tools">Tools</Nav.Link>

            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </BootstrapNavbar.Collapse>

      </Container>
    </BootstrapNavbar>
  );
};

export default NavComponent;