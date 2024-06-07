// src/components/Header.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">GameApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/Sobre">Sobre</Nav.Link>
          <Nav.Link href="/Jogos">Jogos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
