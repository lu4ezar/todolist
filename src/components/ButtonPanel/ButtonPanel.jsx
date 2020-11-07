// @flow
import * as React from "react";
import {
  RemoveRedEye as ViewIcon,
  Edit as EditIcon,
  CheckBox,
  CheckBoxOutlineBlank,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { StToolbar, IconButton } from "./styles";
import type { Props } from "./types";
import { TodoStatusValues } from "../../generated/graphql";

const ButtonPanel = ({
  todo: { id, status },
  toggle,
  deleteTodo,
  showTodo,
}: Props): React.Node => (
  <StToolbar>
    <IconButton title="View details" onClick={() => showTodo(id, "view")}>
      <ViewIcon />
    </IconButton>
    <IconButton title="Edit" onClick={() => showTodo(id, "edit")}>
      <EditIcon />
    </IconButton>
    <IconButton title="Mark as Completed" onClick={() => toggle(id)}>
      {status === TodoStatusValues.Completed ? (
        <CheckBox />
      ) : (
        <CheckBoxOutlineBlank />
      )}
    </IconButton>
    <IconButton title="Delete Todo" onClick={() => deleteTodo(id)}>
      <DeleteIcon />
    </IconButton>
  </StToolbar>
);

export default ButtonPanel;