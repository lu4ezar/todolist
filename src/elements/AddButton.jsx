// @flow
import * as React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import type { Mode, ModeAction } from "../types/mode";

export type Props = {| setMode: (mode: Mode) => ModeAction |};

const AddButton = ({ setMode }: Props): React.Node => (
  <Fab
    style={{ position: "absolute", bottom: "1em", right: "1em" }}
    color="secondary"
    onClick={setMode}
  >
    <AddIcon />
  </Fab>
);

export default AddButton;
