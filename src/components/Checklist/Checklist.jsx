/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import ButtonPanel from "../ButtonPanel";
import StyledChecklist from "./styles";
import type { Props } from "./types";

const Checklist = ({ checklist, provided, snapshot }: Props): React.Node => (
  <StyledChecklist
    innerRef={provided?.innerRef}
    isDragging={snapshot?.isDragging}
    {...provided?.draggableProps}
    {...provided?.dragHandleProps}
    completed={checklist.completed}
  >
    <span>{checklist.title}</span>
    <ButtonPanel entity={checklist} />
  </StyledChecklist>
);

export default Checklist;
