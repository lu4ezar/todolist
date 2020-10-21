// @flow
import type { DropResult } from "react-beautiful-dnd";

export type Props = {
  handleClick: (id: number) => void,
  deleteTodo: (id: number) => void,
  toggleTodo: (id: number) => void,
  setMode: () => void,
  showMessage: (message: string) => void,
  showTodo: (id: number, mode: string) => void,
  onDragEnd: (result: DropResult) => void,
};
