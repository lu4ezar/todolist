// @flow
import * as React from "react";
import { Divider } from "@mui/material";
import Filter from "../../containers/Filter";
import Sort from "../Sort";
import UndoRedo from "../../containers/UndoRedo";
import Drawer from "../Drawer";
import type { Props } from "./types";

function SidePanel({ open, togglePanel }: Props): React.Node {
  return (
    <Drawer toggleDrawer={togglePanel} side="left" open={open}>
      <Filter />
      <Divider />
      <Sort />
      <Divider />
      <UndoRedo />
    </Drawer>
  );
}

export default SidePanel;
