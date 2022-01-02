// @flow
import * as React from "react";
import { Fab } from "@mui/material";
import type { Props } from "./types";

function AddButton({ icon, title, onClick }: Props): React.Node {
  return (
    <Fab color="primary" title={title} onClick={onClick}>
      {icon}
    </Fab>
  );
}

export default AddButton;
