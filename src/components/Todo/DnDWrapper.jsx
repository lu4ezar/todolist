// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";
import type { WrapperProps } from "./types";

export default ({ todo, index }: WrapperProps): React.Node => (
  <Draggable draggableId={todo.id} index={index}>
    {(provided, snapshot) => (
      <Todo todo={todo} provided={provided} snapshot={snapshot} />
    )}
  </Draggable>
);
