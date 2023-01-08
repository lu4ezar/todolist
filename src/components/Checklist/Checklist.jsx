/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from "react";
import ButtonPanel from "../../containers/ButtonPanel";
import AddTodoButton from "../../containers/AddTodoButton";
import Todo from "../Todo";
import StyledChecklist from "./styles";
import type { Props } from "./types";
// import Draggable from "../Draggable";
import Droppable from "../Droppable";

function Checklist({ checklist, provided, snapshot }: Props): React.Node {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <StyledChecklist
      innerRef={provided?.innerRef}
      isDragging={snapshot?.isDragging}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      completed={checklist.completed}
    >
      <span>{checklist.title}</span>
      {expanded && (
        <Droppable droppableId={checklist.id}>
          <ul>
            {checklist.todos.map((todo, index) => (
              // <Draggable key={todo.id} draggableId={todo.id} index={index}>
              <Todo key={todo.id} todo={todo} index={index} />
              // </Draggable>
            ))}
          </ul>
        </Droppable>
      )}
      <ButtonPanel
        entity={checklist}
        expand={() => setExpanded(!expanded)}
        expanded={expanded}
      />
      <AddTodoButton checklist={checklist.id} />
    </StyledChecklist>
  );
}

export default Checklist;
