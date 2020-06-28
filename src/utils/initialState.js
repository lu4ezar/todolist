/* eslint-disable no-console */
// @flow
import { loadState } from "./localStorage";
import Todo from "../Todo";
import type { Todo as TodoType } from "../types/todo";
import type { Todos, TodosStateWithHistory } from "../types/todos";
import getExpireState from "./moment";

/*
state = {
	todos: {
		present: []
	},
	todo: null,
	mode: Mode,
	filter: {}
	notification: null
}
*/

// get fake data
const getExampleTodos = (n: number): Todos => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    const todo = new Todo();
    todo.task = `test todo ${i}`;
    todo.description = `test description ${i}`;
    todo.id = i;
    arr.push(todo);
  }
  return arr;
};

// - check if there are expired todos
const checkForExpired = (data: Todos): Todos =>
  data.map((todo: TodoType): TodoType => {
    if (todo.status !== "completed") {
      todo.status = getExpireState(todo);
    }
    return todo;
  });

const getInitialState = (): TodosStateWithHistory => {
  let initialState;
  try {
    initialState = loadState();
    if (!initialState) {
      throw new Error("localStorage is empty");
    }
    checkForExpired(initialState);
  } catch (err) {
    console.log(`couldn't get initial state from localStorage: ${err.message}`);
    initialState = getExampleTodos(3);
  }
  return {
    todos: {
      past: [],
      present: initialState,
      future: [],
    },
  };
};

export default getInitialState;
