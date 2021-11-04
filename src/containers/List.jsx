// @flow
import * as React from "react";
import { useQuery } from "@apollo/client";
import { Alert } from "@material-ui/lab";
import { LinearProgress } from "@material-ui/core";
import WrappedList from "../components/List";
import { GET_CHECKLISTS } from "../apollo/queries";
import filterEntity from "../utils/filterTodo";
import { filterVar } from "../apollo/cache";

export default (): React.Node => {
  const { data: { checklists = [] } = {}, loading, error } = useQuery(
    GET_CHECKLISTS
  );

  const filter = filterVar();

  const visibleList = filter.master.status
    ? [...checklists.filter((checklist) => filterEntity(checklist, filter))]
    : [...checklists];

  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <Alert variant="filled" severity="error">
        Error: {error.message}
      </Alert>
    );
  }
  return <WrappedList list={visibleList} loading={loading} error={error} />;
};
