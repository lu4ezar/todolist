/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useApolloClient, useQuery } from "@apollo/client";
import type { DropResult } from "react-beautiful-dnd";
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
}: Props): React.Node => {
  const { data, loading, error } = useQuery(GET_TODOS);
  const client = useApolloClient();
  function onDragEnd(result: DropResult): void {
    const { source, destination } = result;
    const { todos } = client.readQuery({ query: GET_TODOS });
    if (!destination) {
      return todos;
    }
    if (source.index === destination.index) {
      return todos;
    }
    const arr = [...todos];
    const [removed] = arr.splice(source.index, 1);
    arr.splice(destination.index, 0, removed);
    client.writeQuery({
      query: GET_TODOS,
      data: {
        todos: arr,
      },
    });
    return arr;
  }

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
