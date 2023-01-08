// @flow
import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
import type { DroppableId } from "react-beautiful-dnd";

function DroppableComponent({
  children,
  droppableId,
}: {
  children: React.Node,
  droppableId: DroppableId,
}): React.Node {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) =>
        React.cloneElement(children, {
          provided,
          snapshot,
          ref: provided.innerRef,
        })
      }
    </Droppable>
  );
}
export default DroppableComponent;
