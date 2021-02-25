/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Draggable from "../Draggable";
import Checklist from "../Checklist";
import Todo from "../Todo";
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
        Error: {error.message}
      </Alert>
    );

  return (
    <StyledList
      isDraggingOver={snapshot?.isDraggingOver}
      {...provided?.droppableProps}
    >
      {list?.length ? (
        <>
          {list.map((entity, index) => (
            <Draggable key={entity.id} draggableId={entity.id} index={index}>
              {entity.__typename === "Todo" ? (
                <Todo key={entity.id} todo={entity} index={index} />
              ) : (
                <Checklist key={entity.id} checklist={entity} index={index} />
              )}
            </Draggable>
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
