// @flow
import * as React from "react";
import Fab from "@mui/material/Fab";
import { Undo as UndoIcon, Redo as RedoIcon } from "@mui/icons-material";
import type { Props } from "./types";

const UndoRedo = ({ canUndo, canRedo, undo, redo }: Props): React.Node => (
  <div>
    <Fab disabled={!canUndo} onClick={undo} title="Undo">
      <UndoIcon />
    </Fab>
    <Fab disabled={!canRedo} onClick={redo} title="Redo">
      <RedoIcon />
    </Fab>
  </div>
);

export default UndoRedo;
