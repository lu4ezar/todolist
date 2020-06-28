// @flow
import * as React from "react";
import CoreDrawer from "@material-ui/core/Drawer";
import { IconButton, Divider, Container } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { ListColor } from "../utils/color";

type Props = {
  side: string,
  open: boolean,
  toggleDrawer: () => void,
  children: React.Node,
};

const Drawer = ({ side, open, toggleDrawer, children }: Props): React.Node => {
  const Chevron = side === "left" ? <ChevronRight /> : <ChevronLeft />;
  return (
    <CoreDrawer anchor={side} open={open} onClose={toggleDrawer}>
      <div
        style={{
          display: "flex",
          justifyContent: `${side === "left" ? "flex-end" : "flex-start"}`,
          background: `${ListColor.background}`,
        }}
      >
        <IconButton onClick={toggleDrawer}>{Chevron}</IconButton>
      </div>
      <Divider />
      <Container maxWidth={false}>{children}</Container>
    </CoreDrawer>
  );
};

export default Drawer;
