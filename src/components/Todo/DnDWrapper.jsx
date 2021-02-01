// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";
import type { Props } from "./types";

export default ({ todo, index }: Props): React.Node => (
  <Draggable draggableId={todo.id} index={index}>
    {(provided, snapshot) => (
      <Todo todo={todo} provided={provided} snapshot={snapshot} />
    )}
  </Draggable>
);
