// @flow
import { loadState } from "./localStorage";
import Todo from "../Todo";
import type { Todo as TodoType } from "../types/todo";
import type { Todos, TodosStateWithHistory } from "../types/todos";
import { isExpired } from "./moment";

/*
*
state = {
	todos: {
		present: []
	},
	todo: null,
	mode: Mode
}
*
*/

export const getInitialState = (): TodosStateWithHistory => {
  let initialState;
  try {
    initialState = loadState();
    if (!initialState) {
      throw new Error("localStorage is empty");
    }
    checkForExpired(initialState);
  } catch (err) {
    console.log(`couldn't get initial state from localStorage: ${  err.message}`);
    initialState = getTodos(3);
  }
  return {
    todos: {
      past: [],
      present: initialState,
      future: []
    }
  };
};

// get fake data
const getTodos = (n: number): Todos => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const todo = new Todo();
    todo.task = `test todo ${  i}`;
    todo.description = `test description ${  i}`;
    todo.id = i;
    arr.push(todo);
  }
  return arr;
};

// - check if there are expired todos
const checkForExpired = (data: Todos): Todos =>
  data.map((todo: TodoType): TodoType => {
    if (todo.status !== "completed") {
      todo.status = isExpired(todo);
    }
    return todo;
  });
