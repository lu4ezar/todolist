/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Checklist from "../Checklist";
import Todo from "../Todo";
import type { Props } from "./types";
import type { Entity } from "../../types/entity";
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
      innerRef={provided?.innerRef}
      isDraggingOver={snapshot?.isDraggingOver}
      {...provided?.droppableProps}
    >
      {list?.length ? (
        <>
          {list.map((entity: Entity, index: number) =>
            entity.__typename === "Todo" ? (
              <Todo key={entity.id} todo={entity} index={index} />
            ) : (
              <Checklist key={entity.id} checklist={entity} index={index} />
            )
          )}
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
