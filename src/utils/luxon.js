// @flow
import { DateTime } from "luxon";
import type { Todo } from "../generated/graphql";

// $FixMe
const isExpired = (todo: Todo): boolean => {
  const currentDateTime = DateTime.local();
  const { created } = todo;
  if (created && currentDateTime > created) {
    return true;
  }
  return false;
};

export default isExpired;
