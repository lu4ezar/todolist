// @flow
import React from "react";
import styled, { css } from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import ButtonPanel from "./buttonPanel";
import { TodoColor } from "../utils/color";
import type { Id, Todo as TodoType } from "../types/todo";
import { ListItem, RootRef } from "@material-ui/core";

const {
  color,
  background,
  //border,
  completedColor,
  completedBackground,
  completedBorder,
  expiredColor,
  expiredBackground,
  expiredBorder
} = TodoColor;

type DesctructuringTypeAnnotation = {
  todo: TodoType,
  index: number,
  toggleTodo: (id: Id) => void,
  deleteTodo: (id: Id) => void,
  showTodo: (id: Id, str: string) => void
};

const StyledTodo = styled(({ isDragging, status, ...other }) => (
  <ListItem {...other} />
))`
	userSelect: 'none';
	color: ${color};
	border-bottom:1px solid silver;
	padding: 10px;
	width: 70%;
	display: flex;
	background: ${background};
	${({ status }) =>
    status === "completed" &&
    css`
      color: ${completedColor};
      background: ${completedBackground};
      border-color: ${completedBorder};
    `}
	${({ status }) =>
    status === "expired" &&
    css`
      color: ${expiredColor};
      background: ${expiredBackground};
      border-color: ${expiredBorder};
    `}
	${({ isDragging }) =>
    isDragging ? `filter: brightness(85%)` : `filter: brightness(1)`}
`;

const Todo = ({
  todo,
  index,
  toggleTodo,
  deleteTodo,
  showTodo
}: DesctructuringTypeAnnotation) => (
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
          {todo.task}
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
