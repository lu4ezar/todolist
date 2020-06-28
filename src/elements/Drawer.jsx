// @flow
import * as React from "react";
import {
  IconButton,
  Divider,
  Container,
  Drawer as CoreDrawer,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { ListColor } from "../utils/color";

type Props = {
  side: string,
  open: boolean,
  toggleDrawer: () => void,
  children: React.Node,
};

const Content = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.side === "left" ? "flex-end" : "flex-start"};
  background-color: ${ListColor.background};
`;

const Drawer = ({ side, open, toggleDrawer, children }: Props): React.Node => (
  <CoreDrawer anchor={side} open={open} onClose={toggleDrawer}>
    <Content side={side}>
      <IconButton onClick={toggleDrawer}>
        <CloseIcon />
      </IconButton>
    </Content>
    <Divider />
    <Container maxWidth={false}>{children}</Container>
  </CoreDrawer>
);

export default Drawer;
