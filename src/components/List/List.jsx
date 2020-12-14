/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { DnDWrapper as ListItem } from "../Todo";
import type { Props } from "./types";
import { StyledList } from "./styles";

const List = ({
  list,
  loading,
  error,
  provided,
  snapshot,
}: Props): React.Node => {
  if (loading) return <LinearProgress />;
  if (error)
    return (
      <Alert variant="filled" severity="error">
        Error
      </Alert>
    );
  return (
    <StyledList
      isDraggingOver={snapshot?.isDraggingOver}
      {...provided?.droppableProps}
    >
      {list?.length ? (
        <>
          {list.map((todo, index) => (
            <ListItem key={todo.id} todo={todo} index={index} />
          ))}
          {provided.placeholder}
        </>
      ) : (
        <Typography variant="h4" gutterBottom>
          nothing to show
        </Typography>
      )}
    </StyledList>
  );
};

export default List;
