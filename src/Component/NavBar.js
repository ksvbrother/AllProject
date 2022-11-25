import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../index.css";
const NavBar = () => {
  const [navBar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className="NavSec">
      <Navbar className={` ${navBar ? "acc_navbar active" : "acc_navbar"} `}>
        <Container fluid>
          <Nav className="mx-auto">
            <Nav.Link href="#action1">Header</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
