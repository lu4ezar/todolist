import { Id, Todo } from "../../types/todo";

export type ButtonPanelProps = {
  todo: Todo,
  toggle: (id: Id) => void,
  deleteTodo: (id: Id) => void,
  showTodo: (id: Id, string) => void,
};
