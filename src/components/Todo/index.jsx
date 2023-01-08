// @flow
import * as React from "react";
import Draggable from "../Draggable";
import Todo from "./Todo";
import type { WrapperProps } from "./types";

export default function DraggableTodo({
  todo,
  index,
}: WrapperProps): React.Node {
  return (
    <Draggable draggableId={todo.id} index={index}>
      <Todo todo={todo} />
    </Draggable>
  );
}
