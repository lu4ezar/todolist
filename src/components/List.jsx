/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled, { type ReactComponentStyled } from "styled-components";
import Paper from "@material-ui/core/Paper";
import ListMaterial from "@material-ui/core/List";
import RootRef from "@material-ui/core/RootRef";
import { Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import type { Todos } from "../types/todos";
import { ListColor } from "../utils/color";
import ListItem from "../elements/Todo";

type StyledListType = {
  isDraggingOver: boolean,
};

const StyledList: ReactComponentStyled<StyledListType> = styled(
  ({ isDraggingOver, ...other }) => <ListMaterial {...other} />
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
  onDragEnd: (result: Object) => void,
};

const List = ({
  todos,
  toggleTodo,
  deleteTodo,
  showTodo,
  onDragEnd,
  setMode,
  showMessage,
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
