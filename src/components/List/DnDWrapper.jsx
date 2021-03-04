/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { Paper } from "@material-ui/core";
import { Droppable } from "react-beautiful-dnd";
import List from "./List";
import type { Props } from "./types";

const DnDWrapper = (props: Props): React.Node => (
  <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <Paper ref={provided.innerRef}>
        <List {...props} provided={provided} snapshot={snapshot} />
      </Paper>
    )}
  </Droppable>
);

export default DnDWrapper;
