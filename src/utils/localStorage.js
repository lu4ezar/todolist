/* eslint-disable no-console */
// @flow
import type { Todos } from "../types/todos";

export const saveState = (list: Todos) => {
  try {
    const serializedState = JSON.stringify(list);
    localStorage.setItem("todos", serializedState);
  } catch (err) {
    console.log("Can't save state to localStorage: ", err);
  }
};

export const loadState = (): ?Todos => {
  const serializedState = localStorage.getItem("todos");
  if (serializedState == null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};
