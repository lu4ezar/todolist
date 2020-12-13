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

const ButtonPanel = ({
  todo: { id, completed },
  showTodo,
}: Props): React.Node => {
  const { deleteTodo } = useDeleteTodo(id);
  const { toggleTodo } = useToggle(id);
  return (
    <StToolbar>
      <IconButton title="View details" onClick={() => showTodo(id, "view")}>
        <ViewIcon />
      </IconButton>
      <IconButton title="Edit" onClick={() => showTodo(id, "edit")}>
        <EditIcon />
      </IconButton>
      <IconButton title="Mark as Completed" onClick={toggleTodo}>
        {completed ? <CheckBox /> : <CheckBoxOutlineBlank />}
      </IconButton>
      <IconButton title="Delete Todo" onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </StToolbar>
  );
};

export default ButtonPanel;
