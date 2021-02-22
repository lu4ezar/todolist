/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { DnDWrapper as ChkList } from "../Checklist";
import { DnDWrapper as Todo } from "../Todo";
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
          {list.map((entity, index) =>
            entity.__typename === "Todo" ? (
              <Todo key={entity.id} todo={entity} index={index} />
            ) : (
              <ChkList key={entity.id} checklist={entity} index={index} />
            )
          )}
          {provided?.placeholder}
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
