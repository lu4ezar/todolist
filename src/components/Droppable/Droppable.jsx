// @flow
import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
import type { DroppableId } from "react-beautiful-dnd";

export default ({
  children,
  droppableId,
}: {
  children: React.Node,
  droppableId: DroppableId,
}): React.Node => (
  <Droppable droppableId={droppableId}>
    {(provided, snapshot) =>
      React.cloneElement(children, { provided, snapshot })
    }
  </Droppable>
);
