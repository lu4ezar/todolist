import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HorizontalSplit = props => (
  <Container>
    <Row>
      <Col xs={{ span: 12, order: 2 }} lg={{ span: 5, offset: 1, order: 1 }}>
        {props.leftSide}
      </Col>
      <Col xs={{ span: 12, order: 1 }} md={{ span: 4, offset: 1, order: 2 }}>
        {props.rightSide}
      </Col>
    </Row>
  </Container>
);

export default HorizontalSplit;
