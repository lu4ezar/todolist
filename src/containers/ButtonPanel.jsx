// @flow
import * as React from "react";
import { useToggle, useDeleteTodo } from "../apollo/hooks";
import { modeVar, currentEntityIdVar } from "../apollo/cache";
import ButtonPanel from "../components/Filter";
import type { Entity } from "../types/entity";

export default ({ entity }: { entity: Entity }): React.Node => {
  const { deleteTodo } = useDeleteTodo(entity.id);
  const { toggleTodo } = useToggle(entity.id);
  const [expandChecklist, setExpandChecklist] = React.useState(false);
  const showEntity = (ID, mode) => {
    currentEntityIdVar(ID);
    modeVar(mode);
  };
  const expand = () => {
    setExpandChecklist(!expandChecklist);
  };
  return (
    <ButtonPanel
      entity={entity}
      showEntity={showEntity}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
      expand={expand}
      expanded={expandChecklist}
    />
  );
};
