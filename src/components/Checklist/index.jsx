// @flow
import * as React from "react";
import Draggable from "../Draggable";
import Checklist from "./Checklist";
import type { WrapperProps } from "./types";
// import Droppable from "../Droppable";

export default function DraggableChecklist({
  checklist,
  index,
}: WrapperProps): React.Node {
  return (
    <Draggable draggableId={checklist.id} index={index}>
      {/* <Droppable droppableId={checklist.id}> */}
      <Checklist checklist={checklist} />
      {/* </Droppable> */}
    </Draggable>
  );
}
