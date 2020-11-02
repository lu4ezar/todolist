// @flow
import type { Mode } from "../../types/mode";
import type { Todo } from "../../generated/graphql";

export type Props = {
  todo: Todo,
  toggle: (id: string) => void,
  deleteTodo: (id: string) => void,
  showTodo: (id: string, Mode) => void,
};
