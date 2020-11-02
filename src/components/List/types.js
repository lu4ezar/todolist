// @flow
import type { DropResult } from "react-beautiful-dnd";
import type { Mode } from "../../types/mode";
import type { Filter } from "../../types/filter";
import type { ThunkAction } from "../../types";

export type Props = {|
  filter: Filter,
  handleClick: (id: string) => void,
  deleteTodo: (id: string) => void,
  toggleTodo: (id: string) => void,
  setMode: () => void,
  showMessage: (message: string) => ThunkAction,
  showTodo: (id: string, mode: Mode) => ThunkAction,
  onDragEnd: (result: DropResult) => void,
|};
