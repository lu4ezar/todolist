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
import { useToggle, useDeleteTodo } from "../../apollo/hooks";
import { StToolbar, IconButton } from "./styles";
import type { Props } from "./types";
import { modeVar, currentEntityIdVar } from "../../apollo/cache";

const ButtonPanel = ({
  entity: { id, completed, __typename: type },
}: Props): React.Node => {
  const { deleteTodo } = useDeleteTodo(id);
  const { toggleTodo } = useToggle(id);
  const [expandChecklist, setExpandChecklist] = React.useState(false);
  const showEntity = (ID, mode) => {
    currentEntityIdVar(ID);
    modeVar(mode);
  };
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
        <IconButton
          title="Expand todos list"
          onClick={() => setExpandChecklist(!expandChecklist)}
        >
          {expandChecklist ? (
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
