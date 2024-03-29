/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import ButtonPanel from "../../containers/ButtonPanel";
import StyledTodo from "./styles";
import type { PropsWrapped } from "./types";

function Todo({ todo, provided, snapshot }: PropsWrapped): React.Node {
  return (
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
}

export default Todo;
