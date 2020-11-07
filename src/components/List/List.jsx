/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useQuery } from "@apollo/client";
import ListItem from "../Todo";
import { GET_TODOS } from "../../apollo/queries";
import type { Props } from "./types";
import { StyledPaper, StyledList } from "./styles";
import filterTodo from "../../utils/filterTodo";

const List = ({
  filter,
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
        Error: {error.message}
      </Alert>
    );

  const content = data?.todos
    .filter((todo) => (filter.master.status ? filterTodo(todo, filter) : todo))
    .map((todo, index) => (
      <ListItem
        key={todo.id}
        index={index}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        showTodo={showTodo}
      />
    ));

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <StyledPaper ref={provided.innerRef}>
            <StyledList
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {content?.length ? (
                <>
                  {content}
                  {provided.placeholder}
                </>
              ) : (
                <Typography variant="h4" gutterBottom>
                  nothing to show
                </Typography>
              )}
            </StyledList>
          </StyledPaper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
