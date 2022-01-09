// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import type { DraggableId } from "react-beautiful-dnd";

function DraggableComponent({
  children,
  draggableId,
  index,
}: {
  children: React.Node,
  draggableId: DraggableId,
  index: number,
}): React.Node {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) =>
        React.cloneElement(children, { provided, snapshot })
      }
    </Draggable>
  );
}
export default DraggableComponent;
