import React from "react";
import "../../App.css";
import "./Header.css";
import logo from "../../logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="siteHeader" href="/">
          <img
            alt="React logo with site header"
            src={logo}
            className="d-inline-block align-top App-logo"
          />{" "}
          Google Books
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="headerLinks" href="/">
            <FontAwesomeIcon icon={faHome} />
          </Nav.Link>
          <Nav.Link className="headerLinks" href="/saved">
            <FontAwesomeIcon icon={faHeart} />{" "}
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
