// @flow
import * as React from "react";
import { Divider } from "@material-ui/core";
import Filter from "../containers/FilterContainer";
import Sort from "../elements/Sort";
import UndoRedo from "../containers/UndoRedoContainer";
import Drawer from "../elements/Drawer";

type Props = {
  open: boolean,
  togglePanel: () => void,
};

const SidePanel = ({ open, togglePanel }: Props) => {
  return (
    <Drawer
      toggleDrawer={togglePanel}
      variant="persistent"
      side="left"
      open={open}
    >
      <Filter />
      <Divider />
      <Sort />
      <Divider />
      <UndoRedo />
    </Drawer>
  );
};

export default SidePanel;
