/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
import List from "./List";
import { StyledPaper } from "./styles";
import type { Props } from "./types";

const DnDWrapper = (props: Props): React.Node => (
  <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <StyledPaper ref={provided.innerRef}>
        <List {...props} provided={provided} snapshot={snapshot} />
      </StyledPaper>
    )}
  </Droppable>
);

export default DnDWrapper;
