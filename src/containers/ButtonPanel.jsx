// @flow
import * as React from "react";
import { useToggle, useDeleteTodo } from "../apollo/hooks/todo";
import { modeVar, currentEntityIdVar } from "../apollo/cache";
import ButtonPanel from "../components/ButtonPanel";
import type { Entity } from "../types/entity";

export default ({
  entity,
  expand,
  expanded,
}: {
  entity: Entity,
  expand: () => void,
  expanded: boolean,
}): React.Node => {
  const { deleteTodo } = useDeleteTodo(entity.id);
  const { toggleTodo } = useToggle(entity.id);
  const showEntity = (ID, mode) => {
    currentEntityIdVar(ID);
    modeVar(mode);
  };
  return (
    <ButtonPanel
      entity={entity}
      showEntity={showEntity}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
      expand={expand}
      expanded={expanded}
    />
  );
};
