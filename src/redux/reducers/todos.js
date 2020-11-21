// @flow
import type { DropResult } from "react-beautiful-dnd";
import undoable, { includeAction } from "redux-undo";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  REORDER,
  UPDATE_TODO,
} from "../actions/actionTypes";
import { TodoStatusValues } from "../../generated/graphql";
import type { Todo as TodoType } from "../../generated/graphql";
import type {
  Todos,
  TodosAction,
  TodosState,
  TodosStateWithHistory,
} from "../../types/todos";
// import getExpireState from "../../utils/luxon";

const reorder = (todos: Todos, startIndex, endIndex) => {
  const arr = [...todos];
  const [removed] = arr.splice(startIndex, 1);
  arr.splice(endIndex, 0, removed);
  return arr;
};

const onDragEnd = (todos, result: DropResult): Todos => {
  const { source, destination } = result;
  if (!destination) {
    return todos;
  }
  if (source.index === destination.index) {
    return todos;
  }
  const list = reorder(todos, source.index, destination.index);
  return list;
};

const createTodo = (todos: Todos, todo: TodoType): TodoType => ({
  ...todo,
  id: uuidv4(),
});

const updateTodo = (todos: Todos, todo: TodoType): Todos =>
  todos.map((arrayItem: TodoType): TodoType =>
    arrayItem.id === todo.id ? todo : arrayItem
  );

const toggleTodo = (todos: Todos, id: string): Todos =>
  todos.map((todo: TodoType): TodoType => {
    if (todo.id === id) {
      // todo.status =
      //   todo.status === TodoStatusValues.Completed
      //     ? getExpireState(todo)
      //     : TodoStatusValues.Completed;
      return {
        ...todo,
        status:
          todo.status !== TodoStatusValues.Completed
            ? TodoStatusValues.Completed
            : // : getExpireState(todo),
              TodoStatusValues.Active,
      };
    }
    return todo;
  });

const deleteTodo = (todos: Todos, id: string): Todos => {
  const newArr = todos.filter((todo) => todo.id !== id);
  return newArr;
};

export const todosReducer = (state: Todos = [], action: TodosAction): Todos => {
  switch (action.type) {
    case ADD_TODO:
      return [createTodo(state, action.todo), ...state];
    case TOGGLE_TODO:
      return toggleTodo(state, action.id);
    case DELETE_TODO:
      return deleteTodo(state, action.id);
    case UPDATE_TODO:
      return updateTodo(state, action.todo);
    case REORDER:
      return onDragEnd(state, action.result);
    default:
      return state;
  }
};

const todos: (TodosState) => TodosStateWithHistory = undoable(todosReducer, {
  filter: includeAction([ADD_TODO, DELETE_TODO]),
});

export default todos;
