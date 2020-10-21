// @flow
import type { Scalars, Todo as TodoType } from "../../generated/graphql";
import type { Mode } from "../../types/mode";

export type Props = {
  todo: TodoType,
  index: number,
  toggleTodo: (id: Scalars) => void,
  deleteTodo: (id: Scalars) => void,
  showTodo: (id: Scalars, str: Mode) => void,
};
