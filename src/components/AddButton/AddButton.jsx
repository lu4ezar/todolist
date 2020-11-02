// @flow
import * as React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "./styles";
import type { Props } from "./types";

const AddButton = ({ setMode }: Props): React.Node => (
  <Fab color="secondary" title="add todo" onClick={setMode}>
    <AddIcon />
  </Fab>
);

export default AddButton;
