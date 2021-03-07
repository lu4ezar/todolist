// @flow
import type { Mode } from "../../types/mode";
import type { Entity } from "../../types/entity";

export type Props = {|
  entity: Entity,
  toggleTodo: (id: string) => void,
  deleteEntity: (id: string) => void,
  showEntity: (id: string, Mode) => void,
  expand: () => void,
  expanded: boolean,
|};
