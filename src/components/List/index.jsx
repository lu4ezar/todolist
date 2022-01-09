/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// @flow
import * as React from "react";
import List from "./List";
import Droppable from "../Droppable";
import type { Props } from "./types";

function ListComponent({ list, loading, error }: Props) {
  return (
    <Droppable droppableId="list">
      <List list={list} loading={loading} error={error?.message} />
    </Droppable>
  );
}

export default ListComponent;
