/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import ButtonPanel from "../ButtonPanel";
import StyledTodo from "./styles";
import type { Props } from "./types";

const Todo = ({
  todo,
  toggleTodo,
  deleteTodo,
  showTodo,
  provided,
  snapshot,
}: Props): React.Node => (
  <StyledTodo
    innerRef={provided.innerRef}
    isDragging={snapshot.isDragging}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    completed={todo.completed ? todo.completed : todo.priority}
    title="DoubleClick to view details"
    onDoubleClick={() => showTodo(todo.id, "view")}
  >
    <span>{todo.title}</span>
    <ButtonPanel
      todo={todo}
      toggle={toggleTodo}
      deleteTodo={deleteTodo}
      showTodo={showTodo}
    />
  </StyledTodo>
);

export default Todo;
