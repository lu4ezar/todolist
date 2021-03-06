// @flow
import * as React from "react";
import {
  IconButton,
  Divider,
  Container,
  Drawer as CoreDrawer,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Content from "./styles";
import type { Props } from "./types";

const Drawer = ({ side, open, toggleDrawer, children }: Props): React.Node => (
  <CoreDrawer anchor={side} open={open} onClose={toggleDrawer}>
    <Content side={side}>
      <IconButton onClick={toggleDrawer} title="close">
        <CloseIcon />
      </IconButton>
    </Content>
    <Divider />
    <Container maxWidth="sm">{children}</Container>
  </CoreDrawer>
);

export default Drawer;
