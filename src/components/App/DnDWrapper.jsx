// @flow
import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import App from "./App";
import { useReorder } from "../../apollo/hooks";

const DnDWrapper = () => {
  const onDragStart = () => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  };
  const onDragEnd = useReorder();
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <App />
    </DragDropContext>
  );
};

export default DnDWrapper;
