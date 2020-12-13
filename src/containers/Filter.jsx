// @flow
import { useApolloClient } from "@apollo/client";
import * as React from "react";
import { filterVar } from "../apollo/cache";
import { GET_TODOS } from "../apollo/queries";
import Filter from "../components/Filter";

export default () => {
  const client = useApolloClient();
  const todos = client.readQuery(GET_TODOS);
  const completedCount = todos.filter((todo) => !!todo.completed).length;
  const expiredCount = todos.filter((todo) => todo.expires > Date.now()).length;
  const filter = filterVar();

  const handleChange = (filterName: FilterName) => (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => {
    // MUI Select does not have currentTarget
    const target: HTMLInputElement = event.target.type
      ? event.currentTarget
      : event.target;
    const value: FilterValue =
      target.type === "checkbox"
        ? (target.checked:
            | FilterStatus
            | CompletedFilterValue
            | ExpiredFilterValue)
        : // $FlowFixMe
          (target.value: PriorityFilterValue);
    const { name } = target;

    filterVar({
      filter: filterName,
      // $FlowFixMe
      property: name,
      value,
    });
  };
  return (
    <Filter
      filter={filter}
      handleChange={handleChange}
      completedCount={completedCount}
      expiredCount={expiredCount}
    />
  );
};
