// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import Checklist from "./Checklist";
import type { WrapperProps } from "./types";

export default ({ checklist, index }: WrapperProps): React.Node => (
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
