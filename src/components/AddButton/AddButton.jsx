// @flow
import * as React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "./styles";
import type { Props } from "./types";

const AddButton = ({ setMode, entity }: Props): React.Node => (
  <Fab color="secondary" title="add todo" onClick={setMode}>
    <AddIcon /> ${entity}
  </Fab>
);

export default AddButton;
