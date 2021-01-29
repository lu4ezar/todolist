// @flow
import * as React from "react";
import { useQuery } from "@apollo/client";
import WrappedList from "../components/List";
import { GET_ALL } from "../apollo/queries";
import filterEntity from "../utils/filterTodo";
import { filterVar } from "../apollo/cache";

export default (): React.Node => {
  const { data: { todos = [] } = {}, loading, error } = useQuery(GET_ALL);

  const filter = filterVar();

  const visibleList = todos.length
    ? todos.reduce(
        (acc, entity) =>
          filter.master.completed
            ? acc.concat(filterEntity(entity, filter))
            : acc.concat(entity),
        []
      )
    : [];
  return <WrappedList list={visibleList} loading={loading} error={error} />;
};
