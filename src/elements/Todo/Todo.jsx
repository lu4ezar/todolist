/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { RootRef } from "@material-ui/core";
import ButtonPanel from "../ButtonPanel";
import StyledTodo from "./styles";
import type { Props } from "./types";

const Todo = ({ todo, index, toggleTodo, deleteTodo, showTodo }: Props) => (
  <Draggable draggableId={todo.id.toString()} index={index}>
    {(provided, snapshot) => (
      <RootRef rootRef={provided.innerRef}>
        <StyledTodo
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
      </RootRef>
    )}
  </Draggable>
);

export default Todo;
