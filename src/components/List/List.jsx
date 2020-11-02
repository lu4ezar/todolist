/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useQuery } from "@apollo/client";
import type { Todos } from "../../types/todos";
import ListItem from "../Todo";
import { GET_TODOS } from "../../apollo/queries";
import type { Props } from "./types";
import { StyledPaper, StyledList } from "./styles";
import { filterList } from "../../redux/selectors";

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
        Error
      </Alert>
    );
  let { todos = [] }: { todos: Todos } = data ?? {};

  if (filter.master.status) {
    todos = filterList(todos, filter);
  }

  const content = todos.length ? (
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
  ) : (
    <Typography variant="h4" gutterBottom>
      nothing to show
    </Typography>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <StyledPaper ref={provided.innerRef}>
            <StyledList
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {content}
              {provided.placeholder}
            </StyledList>
          </StyledPaper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
