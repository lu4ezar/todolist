// @flow
import React from "react";
import { useQuery } from "@apollo/client";
import WrappedList from "../components/List";
import { GET_TODOS } from "../apollo/queries";
import filterTodo from "../utils/filterTodo";
import { filterVar } from "../apollo/cache";

export default () => {
  const { data: { todos = [] } = {}, loading, error } = useQuery(GET_TODOS);

  const filter = filterVar();

  const visibleList = todos.filter((todo) =>
    filter.master.completed ? filterTodo(todo, filter) : todo
  );
  return <WrappedList list={visibleList} loading={loading} error={error} />;
};
