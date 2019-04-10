import React from "react";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Nav>
          <NavItem>
            <Link to="/">Client Review Application</Link>
          </NavItem>
        </Nav>
        <Row />
        <Row>
          <Col />
          <Col>
            <Link to="/form" className="btn btn-success btn-large">
              Start to add review/comments
            </Link>
          </Col>
          <Col> </Col>
        </Row>
      </Container>
    );
  }
}
