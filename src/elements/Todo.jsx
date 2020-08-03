/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React from "react";
import styled, { css } from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { ListItem, RootRef } from "@material-ui/core";
import ButtonPanel from "./ButtonPanel";
import { TodoColor } from "../utils/color";
import type { Id, Todo as TodoType } from "../types/todo";

const {
  color,
  background,
  completedColor,
  completedBackground,
  expiredColor,
  expiredBackground,
} = TodoColor;

type TodoProps = {
  todo: TodoType,
  index: number,
  toggleTodo: (id: Id) => void,
  deleteTodo: (id: Id) => void,
  showTodo: (id: Id, str: string) => void,
};

const StyledTodo = styled(({ isDragging, status, ...other }) => (
  <ListItem {...other} />
))`
	userSelect: 'none';
	font-weight: bold;
	color: ${color};
	border-bottom:1px solid silver;
	width: 70%;
	display: flex;
	background: ${background};
	& > span {
		padding-left: 1.5rem;
	}
	& > div {
		margin-left: auto
	}
	${({ status }) =>
    status === "completed" &&
    css`
      color: ${completedColor};
      border-color: ${completedColor};
      position: relative;
      overflow: hidden;
      &::after {
        content: "Done!";
        position: absolute;
        top: 60%;
        left: 27%;
        background-color: ${completedBackground};
        padding: 0.5rem 1rem 1rem;
        border-radius: 8px;
      }
    `}
	${({ status }) =>
    status === "expired" &&
    css`
      color: ${expiredColor};
      border-color: ${expiredColor};
      position: relative;
      overflow: hidden;
      &::after {
        content: "Expired!";
        position: absolute;
        top: 60%;
        left: 25%;
        background-color: ${expiredBackground};
        padding: 0.5rem 1rem 1rem;
        border-radius: 8px;
      }
    `}
	${({ isDragging }) =>
    isDragging ? `filter: brightness(85%)` : `filter: brightness(1)`}
`;

const Todo = ({ todo, index, toggleTodo, deleteTodo, showTodo }: TodoProps) => (
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
