import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Share/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../Components/Share/RightNav";

const NewsLayOuts = () => {
  return (
    <div>
      <Container>
        <Header />
        <Row>
          <Col lg={9} sm>
            <Outlet />
          </Col>

          <Col lg={3} sm>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayOuts;
