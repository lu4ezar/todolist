/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { Typography } from "@mui/material";
import Checklist from "../Checklist";
import Todo from "../Todo";
import AddChecklistButton from "../../containers/AddChecklistButton";
import type { Props } from "./types";
import type { Entity } from "../../types/entity";
import { StyledList } from "./styles";

function List({ list, provided, snapshot }: Props): React.Node {
  return (
    <>
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
            {provided?.placeholder}
          </>
        ) : (
          <Typography variant="h4" gutterBottom>
            nothing to show
          </Typography>
        )}
      </StyledList>
      <AddChecklistButton />
    </>
  );
}

export default List;
