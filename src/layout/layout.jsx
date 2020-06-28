import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";
import HorizontalSplit from "./horizontalSplit";

const OuterDiv = styled(Container)`
  min-height: 100%;
`;

type LayoutProps = {
  leftSide: React.Node,
  rightSide: React.Node,
  bottom: React.Node,
  handleChange: () => void,
  clear: () => void,
};

const Layout = ({
  leftSide,
  rightSide,
  bottom,
  handleChange,
  clear,
}: LayoutProps) => (
  <OuterDiv className="d-flex flex-column px-0" fluid>
    <Header clear={clear} handleChange={handleChange} />
    <Container className="d-flex flex-column flex-fill mt-3">
      <HorizontalSplit leftSide={leftSide} rightSide={rightSide} />
      <Container className="d-flex flex-fill align-items-center justify-content-center mb-3 mb-md-0">
        {bottom}
      </Container>
    </Container>
    <Footer />
  </OuterDiv>
);

export default Layout;
