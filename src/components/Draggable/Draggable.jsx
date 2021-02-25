// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import type { DraggableId } from "react-beautiful-dnd";

export default ({
  children,
  draggableId,
  index,
}: {
  children: React.Node,
  draggableId: DraggableId,
  index: number,
}): React.Node => (
  <Draggable draggableId={draggableId} index={index}>
    {(provided, snapshot) =>
      React.cloneElement(children, { provided, snapshot })
    }
  </Draggable>
);
