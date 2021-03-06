// @flow
import React from "react";
import Draggable from "../Draggable";
import Checklist from "./Checklist";
import type { WrapperProps } from "./types";

export default ({ checklist, index }: WrapperProps) => (
  <Draggable draggableId={checklist.id} index={index}>
    <Checklist checklist={checklist} />
  </Draggable>
);
