// @flow
import type { Mode } from "../../types/mode";
import type { Entity } from "../../types/entity";

export type Props = {
  entity: Entity,
  toggle: (id: string) => void,
  deleteTodo: (id: string) => void,
  showTodo: (id: string, Mode) => void,
};
