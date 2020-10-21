/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { RootRef, Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useQuery } from "@apollo/client";
import type { Todos } from "../../types/todos";
import ListItem from "../../elements/Todo";
import GET_TODOS from "../../graphql/queries";
import type { Props } from "./types";
import { StyledPaper, StyledList } from "./styles";

const List = ({
  toggleTodo,
  deleteTodo,
  showTodo,
  onDragEnd,
}: Props): React.Node => {
  const { data, loading, error } = useQuery(GET_TODOS);
  if (loading) return <LinearProgress />;
  if (error)
    return (
      <Alert variant="filled" severity="error">
        Error
      </Alert>
    );
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
              </StyledList>
            </StyledPaper>
          </RootRef>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
