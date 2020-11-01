// @flow
import type { Todo as TodoType } from "../../generated/graphql";
import type { Mode } from "../../types/mode";

export type Props = {
  todo: TodoType,
  index: number,
  toggleTodo: (id: string) => void,
  deleteTodo: (id: string) => void,
  showTodo: (id: string, str: Mode) => void,
};
