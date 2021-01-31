// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import Checklist from "./Checklist";
import type { Props } from "./types";

export default ({ checklist, index }: Props): React.Node => (
  <Draggable draggableId={checklist.id} index={index}>
    {(provided, snapshot) => (
      <Checklist
        checklist={checklist}
        provided={provided}
        snapshot={snapshot}
      />
    )}
  </Draggable>
);
