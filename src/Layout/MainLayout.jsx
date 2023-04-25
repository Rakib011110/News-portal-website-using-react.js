import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import LeftNav from "../Components/Share/LeftNav";
import RightNav from "../Components/Share/RightNav";
import Header from "../Components/Share/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Col lg={3} sm>
          <LeftNav></LeftNav>
        </Col>
        <Col lg={6} sm>
          <Outlet />
        </Col>
        <Col lg={3} sm>
          <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
