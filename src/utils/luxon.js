// @flow
import { DateTime } from "luxon";
import type { Status, Todo } from "../types/todo";

const getExpireState = (todo: Todo): Status => {
  const currentDateTime = DateTime.local();
  const { expires } = todo;
  if (currentDateTime > expires) {
    return "expired";
  }
  return "active";
};

export default getExpireState;
