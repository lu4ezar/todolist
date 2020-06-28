import React from "react";
import {
  Container,
  TableRow as Row,
  TableCell as Col,
} from "@material-ui/core";

type HzSplitProps = {
  leftSide: React.Node,
  rightSide: React.Node,
};

const HorizontalSplit = ({ leftSide, rightSide }: HzSplitProps) => (
  <Container>
    <Row>
      <Col xs={{ span: 12, order: 2 }} lg={{ span: 5, offset: 1, order: 1 }}>
        {leftSide}
      </Col>
      <Col xs={{ span: 12, order: 1 }} md={{ span: 4, offset: 1, order: 2 }}>
        {rightSide}
      </Col>
    </Row>
  </Container>
);

export default HorizontalSplit;
