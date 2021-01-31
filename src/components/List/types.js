// @flow
import type { DropResult } from "react-beautiful-dnd";
import type { Mode } from "../../types/mode";
import type { Filter } from "../../types/filter";

export type Props = {|
  filter: Filter,
  handleClick: (id: string) => void,
  deleteTodo: (id: string) => void,
  toggleTodo: (id: string) => void,
  setMode: () => void,
  showMessage: (message: string) => void,
  showEntity: (id: string, mode: Mode) => void,
  onDragEnd: (result: DropResult) => void,
|};
