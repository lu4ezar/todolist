// @flow
import * as React from "react";
import {
  CaretUp,
  CaretDown,
  CheckSquare,
  Eye,
  Pencil,
  Square,
  TrashSimple,
} from "phosphor-react";
import { StToolbar, IconButton } from "./styles";
import type { Props } from "./types";

function ButtonPanel({
  entity,
  showEntity,
  deleteEntity,
  toggleTodo,
  expand,
  expanded,
}: Props): React.Node {
  const { id, completed, __typename: type } = entity;
  return (
    <StToolbar>
      <IconButton
        title="View details"
        onClick={() => showEntity(id, "view")}
        size="large"
      >
        <Eye size={24} weight="fill" />
      </IconButton>
      <IconButton
        title="Edit"
        onClick={() => showEntity(id, "edit")}
        size="large"
      >
        <Pencil size={24} weight="fill" />
      </IconButton>
      {type === "Todo" ? (
        <IconButton title="Mark as Completed" onClick={toggleTodo} size="large">
          {completed ? (
            <CheckSquare size={24} weight="fill" />
          ) : (
            <Square size={24} weight="fill" />
          )}
        </IconButton>
      ) : (
        entity.todos && (
          <IconButton title="Expand todo list" onClick={expand} size="large">
            {expanded ? (
              <CaretUp size={24} weight="fill" />
            ) : (
              <CaretDown size={24} weight="fill" />
            )}
          </IconButton>
        )
      )}
      <IconButton title="Delete Todo" onClick={deleteEntity} size="large">
        <TrashSimple size={24} weight="fill" />
      </IconButton>
    </StToolbar>
  );
}

export default ButtonPanel;
