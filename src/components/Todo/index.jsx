// @flow
import * as React from "react";
import Draggable from "../Draggable";
import Todo from "./Todo";
import type { WrapperProps } from "./types";

export default ({ todo, index }: WrapperProps): React.Node => (
  <Draggable draggableId={todo.id} index={index}>
    <Todo todo={todo} />
  </Draggable>
);
