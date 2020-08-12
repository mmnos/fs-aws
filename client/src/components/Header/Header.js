import React from "react";
import "../../App.css";
import "./Header.css";
import logo from "../../logo.svg";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="React logo with site header"
            src={logo}
            className="d-inline-block align-top App-logo"
          />{" "}
          Google Books
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="headerLinks" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="headerLinks" href="#link">
            Saved
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
