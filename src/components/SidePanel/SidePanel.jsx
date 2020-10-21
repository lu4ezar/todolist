// @flow
import * as React from "react";
import { Divider } from "@material-ui/core";
import Filter from "../../containers/FilterContainer";
import Sort from "../../elements/Sort";
import UndoRedo from "../../containers/UndoRedoContainer";
import Drawer from "../../elements/Drawer";
import type { Props } from "./types";

const SidePanel = ({ open, togglePanel }: Props): React.Node => {
  return (
    <Drawer toggleDrawer={togglePanel} side="left" open={open}>
      <Filter />
      <Divider />
      <Sort />
      <Divider />
      <UndoRedo />
    </Drawer>
  );
};

export default SidePanel;
