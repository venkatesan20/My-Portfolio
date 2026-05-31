import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import logo from "../assets/vr-logo.png";




const NavComponent = () => {
  return (
    <BootstrapNavbar className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand href="/">
          <img src={logo} alt="VR Logo" className="logo-img" />
        </BootstrapNavbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#tools">Tools</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavComponent;
