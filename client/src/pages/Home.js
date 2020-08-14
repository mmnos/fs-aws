import React from "react";
import logo from "../undraw_the_world_is_mine_nb0e.svg";
import Search from "../components/Search/Search";
import BookList from "../components/BookList/BookList";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  const imageStyle = {
    height: 300,
    width: "100%",
    marginTop: 15,
  };

  return (
    <>
      <Row className="my-auto">
        <Col sm={{ span: 6, offset: 3 }}>
          <img
            src={logo}
            style={imageStyle}
            alt="site icon with girl holding the world"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <Search />
        </Col>
      </Row>
      <Row>
        <BookList />
      </Row>
    </>
  );
};

export default Home;
