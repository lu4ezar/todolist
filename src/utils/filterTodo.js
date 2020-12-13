// @flow
import type { Todo as TodoType } from "../generated/graphql";
import type { Filter } from "../types/filter";

const filterTodo = (todo: TodoType, filter: Filter): boolean => {
  const {
    priority: { completed: priorityFilterEnabled, value: priorityFilter },
    completed: { completed: completedFilterEnabled, value: completedFilter },
    expired: { completed: expiredFilterEnabled, value: expiredFilter },
  } = filter;
  const { priority, completed, expires } = todo;
  let result = false;
  if (priorityFilterEnabled) {
    if (!priorityFilter.includes(priority)) {
      return false;
    }
    result = true;
  }
  if (completedFilterEnabled) {
    if (completed) {
      return completedFilter;
    }
    result = !completedFilter;
  }
  if (expiredFilterEnabled) {
    if (expires) {
      return expiredFilter;
    }
    result = !expiredFilter;
  }
  return result;
};

export default filterTodo;
