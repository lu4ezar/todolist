// @flow
import * as React from "react";
import Fab from "@material-ui/core/Fab";
import { Undo as UndoIcon, Redo as RedoIcon } from "@material-ui/icons";

type Props = {
  canUndo: boolean,
  canRedo: boolean,
  undo: () => void,
  redo: () => void,
};

const UndoRedo = ({ canUndo, canRedo, undo, redo }: Props) => (
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
