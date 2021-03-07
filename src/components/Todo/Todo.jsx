/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import ButtonPanel from "../ButtonPanel";
import StyledTodo from "./styles";
import type { PropsWrapped } from "./types";

const Todo = ({ todo, provided, snapshot }: PropsWrapped): React.Node => (
  <StyledTodo
    innerRef={provided?.innerRef}
    isDragging={snapshot?.isDragging}
    {...provided?.draggableProps}
    {...provided?.dragHandleProps}
    completed={todo.completed}
  >
    <span>{todo.title}</span>
    <ButtonPanel entity={todo} />
  </StyledTodo>
);

export default Todo;
