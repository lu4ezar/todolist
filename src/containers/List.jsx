// @flow
import * as React from "react";
import { useQuery } from "@apollo/client";
import WrappedList from "../components/List";
import { GET_ALL } from "../apollo/queries";
import filterEntity from "../utils/filterTodo";
import { filterVar } from "../apollo/cache";

export default (): React.Node => {
  const { data = {}, loading, error } = useQuery(GET_ALL);
  const { todos = [], checklists = [] } = data;

  const filter = filterVar();

  const visibleList = filter.master.status
    ? [
        ...todos.filter((todo) => filterEntity(todo, filter)),
        ...checklists.filter((checklist) => filterEntity(checklist, filter)),
      ]
    : [...todos, ...checklists];

  return <WrappedList list={visibleList} loading={loading} error={error} />;
};
