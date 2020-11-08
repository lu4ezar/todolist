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
    <IconButton title="View Details" onClick={() => showTodo(id, "view")}>
      <ViewIcon />
    </IconButton>
    <IconButton title="Edit Todo" onClick={() => showTodo(id, "edit")}>
      <EditIcon />
    </IconButton>
    <IconButton
      title={
        status === TodoStatusValues.Active
          ? "Mark as Completed"
          : "Mark as Active"
      }
      onClick={() => toggle(id)}
    >
      {status === TodoStatusValues.Active ? (
        <CheckBoxOutlineBlank />
      ) : (
        <CheckBox />
      )}
    </IconButton>
    <IconButton title="Delete Todo" onClick={() => deleteTodo(id)}>
      <DeleteIcon />
    </IconButton>
  </StToolbar>
);

export default ButtonPanel;
