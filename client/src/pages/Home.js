import React from "react";
import logo from "../undraw_the_world_is_mine_nb0e.svg";
import Search from "../components/Search/Search";
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
          <img src={logo} style={imageStyle} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Search />
        </Col>
      </Row>
    </>
  );
};

export default Home;
