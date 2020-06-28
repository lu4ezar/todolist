// @flow
import React from "react";
import { Icon, IconButton, Toolbar } from "@material-ui/core";
import type { Id, Todo } from "../types/todo";

type ButtonPanelProps = {
  todo: Todo,
  mode: ?string,
  toggle: (id: Id) => void,
  deleteTodo: (id: Id) => void,
  showTodo: (id: Id, string) => void,
};

const ButtonPanel = ({
  todo,
  mode,
  toggle,
  deleteTodo,
  showTodo,
}: ButtonPanelProps) => {
  const { id, status } = todo;
  return (
    <Toolbar style={{ marginLeft: "auto" }}>
      {mode !== "view" && (
        <IconButton title="View details" onClick={() => showTodo(id, "view")}>
          <Icon>remove_red_eye</Icon>
        </IconButton>
      )}
      <IconButton
        title="Edit"
        onClick={() => showTodo(id, "edit")}
        disabled={status === "completed"}
      >
        <Icon>edit</Icon>
      </IconButton>
      <IconButton
        title="Mark as Completed"
        onClick={() => toggle(id)}
        disabled={status === "completed"}
      >
        {status === "completed" ? (
          <Icon>check_box</Icon>
        ) : (
          <Icon>check_box_outline_blank</Icon>
        )}
      </IconButton>
      <IconButton title="Delete Todo" onClick={() => deleteTodo(id)}>
        <Icon>delete</Icon>
      </IconButton>
    </Toolbar>
  );
};

export default ButtonPanel;
