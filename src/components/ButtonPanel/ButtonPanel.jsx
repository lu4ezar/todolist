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

const ButtonPanel = ({
  entity,
  showEntity,
  deleteTodo,
  toggleTodo,
  expand,
  expanded,
}: Props): React.Node => {
  const { id, completed, __typename: type } = entity;
  return (
    <StToolbar>
      <IconButton title="View details" onClick={() => showEntity(id, "view")}>
        <Eye size={24} weight="fill" />
      </IconButton>
      <IconButton title="Edit" onClick={() => showEntity(id, "edit")}>
        <Pencil size={24} weight="fill" />
      </IconButton>
      {type === "Todo" ? (
        <IconButton title="Mark as Completed" onClick={toggleTodo}>
          {completed ? (
            <CheckSquare size={24} weight="fill" />
          ) : (
            <Square size={24} weight="fill" />
          )}
        </IconButton>
      ) : (
        <IconButton title="Expand todos list" onClick={expand}>
          {expanded ? (
            <CaretUp size={24} weight="fill" />
          ) : (
            <CaretDown size={24} weight="fill" />
          )}
        </IconButton>
      )}
      <IconButton title="Delete Todo" onClick={deleteTodo}>
        <TrashSimple size={24} weight="fill" />
      </IconButton>
    </StToolbar>
  );
};

export default ButtonPanel;
