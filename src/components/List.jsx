/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import type { DropResult } from "react-beautiful-dnd";
import styled, { type ReactComponentStyled } from "styled-components";
import {
  Paper,
  List as ListMui,
  RootRef,
  Typography,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import type { Todos } from "../types/todos";
import { ListColor } from "../utils/color";
import ListItem from "../elements/Todo";

type StyledListType = {
  isDraggingOver: boolean,
};

const StyledList: ReactComponentStyled<StyledListType> = styled(
  ({ isDraggingOver, ...other }) => <ListMui {...other} />
)`
  height: 90vh;
  max-height: 90vh;
  overflow: auto;
  transition: background 0.2s ease;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? ListColor.dragBackground : ListColor.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
`;

type Props = {
  todos: Todos,
  handleClick: (id: number) => void,
  deleteTodo: (id: number) => void,
  toggleTodo: (id: number) => void,
  setMode: () => void,
  showMessage: (message: string) => void,
  showTodo: (id: number, mode: string) => void,
  onDragEnd: (result: DropResult) => void,
};

const List = ({
  todos,
  toggleTodo,
  deleteTodo,
  showTodo,
  onDragEnd,
  setMode,
}: Props) => {
  const content = !todos.length ? (
    <Typography variant="h4" gutterBottom>
      nothing to show
    </Typography>
  ) : (
    todos.map((todo, index) => (
      <ListItem
        key={todo.id}
        index={index}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        showTodo={showTodo}
      />
    ))
  );
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <RootRef rootRef={provided.innerRef}>
            <Paper>
              <StyledList
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
              >
                {content}
                {provided.placeholder}
                <Fab
                  color="secondary"
                  onClick={setMode}
                  style={{
                    position: "absolute",
                    bottom: "1em",
                    right: "1em",
                  }}
                >
                  <AddIcon />
                </Fab>
              </StyledList>
            </Paper>
          </RootRef>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
