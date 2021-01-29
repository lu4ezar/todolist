// @flow
import * as React from "react";
import {
  RemoveRedEye as ViewIcon,
  Edit as EditIcon,
  CheckBox,
  CheckBoxOutlineBlank,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useToggle, useDeleteTodo } from "../../apollo/hooks";
import { StToolbar, IconButton } from "./styles";
import type { Props } from "./types";
import { modeVar, currentEntityIdVar } from "../../apollo/cache";

const ButtonPanel = ({
  entity: { id, completed, __typename: type },
}: Props): React.Node => {
  const { deleteTodo } = useDeleteTodo(id);
  const { toggleTodo } = useToggle(id);
  const showEntity = (ID, mode) => {
    currentEntityIdVar(ID);
    modeVar(mode);
  };
  return (
    <StToolbar>
      <IconButton title="View details" onClick={() => showEntity(id, "view")}>
        <ViewIcon />
      </IconButton>
      <IconButton title="Edit" onClick={() => showEntity(id, "edit")}>
        <EditIcon />
      </IconButton>
      {type === "Todo" && (
        <IconButton title="Mark as Completed" onClick={toggleTodo}>
          {completed ? <CheckBox /> : <CheckBoxOutlineBlank />}
        </IconButton>
      )}
      <IconButton title="Delete Todo" onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </StToolbar>
  );
};

export default ButtonPanel;
