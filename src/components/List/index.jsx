/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// @flow
import * as React from "react";
import List from "./List";
import Droppable from "../Droppable";
import type { Props } from "./types";

export default ({ list, loading, error }: Props) => (
  <Droppable droppableId="list">
    <List list={list} loading={loading} error={error?.message} />
  </Droppable>
);
