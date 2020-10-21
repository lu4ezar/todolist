/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { RootRef, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useQuery } from "@apollo/client";
import type { Todos } from "../../types/todos";
import ListItem from "../../elements/Todo";
import GET_TODOS from "../../graphql/queries";
import type { Props } from "./types";
import { StyledPaper, StyledList, StyledFab } from "./styles";

const List = ({
  toggleTodo,
  deleteTodo,
  showTodo,
  onDragEnd,
  setMode,
}: Props) => {
  const { data } = useQuery(GET_TODOS);
  const { todos = [] }: { todos: Todos } = data ?? {};
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
            <StyledPaper>
              <StyledList
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
              >
                {content}
                {provided.placeholder}
                <StyledFab color="secondary" onClick={setMode}>
                  <AddIcon />
                </StyledFab>
              </StyledList>
            </StyledPaper>
          </RootRef>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
