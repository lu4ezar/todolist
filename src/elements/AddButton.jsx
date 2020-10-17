// @flow
import React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddButton = ({ setMode }: { setMode: () => void }) => (
  <Fab
    style={{ position: "absolute", bottom: "1em", right: "1em" }}
    color="secondary"
    onClick={setMode}
  >
    <AddIcon />
  </Fab>
);

export default AddButton;
