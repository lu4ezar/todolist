import React from "react";
import List from "./List";
import Droppable from "../Droppable";
import type { List as ListType } from "./types";

export default ({ list }: { list: ListType }) => (
  <Droppable droppableId="list">
    <List list={list} />
  </Droppable>
);
