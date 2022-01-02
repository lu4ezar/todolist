// @flow
import * as React from "react";
import {
  IconButton,
  Divider,
  Container,
  Drawer as CoreDrawer,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Content from "./styles";
import type { Props } from "./types";

function Drawer({ side, open, toggleDrawer, children }: Props): React.Node {
  return (
    <CoreDrawer anchor={side} open={open} onClose={toggleDrawer}>
      <Content side={side}>
        <IconButton onClick={toggleDrawer} title="close" size="large">
          <CloseIcon />
        </IconButton>
      </Content>
      <Divider />
      <Container maxWidth="sm">{children}</Container>
    </CoreDrawer>
  );
}

export default Drawer;
