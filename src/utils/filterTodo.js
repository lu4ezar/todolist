// @flow
import { TodoStatusValues } from "../generated/graphql";
import type { Todo as TodoType } from "../generated/graphql";
import type { Filter } from "../types/filter";

const filterTodo = (todo: TodoType, filter: Filter): boolean => {
  const {
    priority: { status: priorityFilterEnabled, value: priorityFilter },
    completed: { status: completedFilterEnabled, value: completedFilter },
    expired: { status: expiredFilterEnabled, value: expiredFilter },
  } = filter;
  const { priority, status } = todo;
  let result = false;
  if (priorityFilterEnabled) {
    if (!priorityFilter.includes(priority)) {
      return false;
    }
    result = true;
  }
  if (completedFilterEnabled) {
    if (status === TodoStatusValues.Completed) {
      return completedFilter;
    }
    result = !completedFilter;
  }
  if (expiredFilterEnabled) {
    if (status === TodoStatusValues.Expired) {
      return expiredFilter;
    }
    result = !expiredFilter;
  }
  return result;
};

export default filterTodo;
