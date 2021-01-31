/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import ButtonPanel from "../ButtonPanel";
import StyledChecklist from "./styles";
import type { Props } from "./types";

const Checklist = ({
  checklist,
  // toggleChecklist,
  deleteChecklist,
  showChecklist,
  provided,
  snapshot,
}: Props): React.Node => (
  <StyledChecklist
    innerRef={provided.innerRef}
    isDragging={snapshot.isDragging}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    completed={checklist.completed ? checklist.completed : checklist.priority}
    title="DoubleClick to view details"
    onDoubleClick={() => showChecklist(checklist.id, "view")}
  >
    <span>{checklist.title}</span>
    <ButtonPanel
      entity={checklist}
      toggle={() => {}}
      deleteChecklist={deleteChecklist}
      showChecklist={showChecklist}
    />
  </StyledChecklist>
);

export default Checklist;
