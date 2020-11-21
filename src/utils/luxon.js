// @flow
import { DateTime } from "luxon";
import { TodoStatusValues } from "../generated/graphql";
import type { TodoStatus, Todo } from "../generated/graphql";

// $FixMe
const getExpireState = (todo: Todo): TodoStatus => {
  const currentDateTime = DateTime.local();
  const { created } = todo;
  if (created && currentDateTime > created) {
    return TodoStatusValues.Expired;
  }
  return TodoStatusValues.Active;
};

export default getExpireState;
