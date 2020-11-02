/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { Draggable } from "react-beautiful-dnd";
import ButtonPanel from "../ButtonPanel";
import StyledTodo from "./styles";
import type { Props } from "./types";

const Todo = ({
  todo,
  index,
  toggleTodo,
  deleteTodo,
  showTodo,
}: Props): React.Node => (
  <Draggable draggableId={todo.id} index={index}>
    {(provided, snapshot) => (
      <StyledTodo
        innerRef={provided.innerRef}
        isDragging={snapshot.isDragging}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        status={todo.status ? todo.status : todo.priority}
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
    )}
  </Draggable>
);

export default Todo;
