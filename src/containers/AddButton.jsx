// @flow
import * as React from "react";
import { modeVar, entityVar } from "../apollo/cache";
import AddButton from "../components/AddButton";
import type { EntityType } from "../types/entity";

export default ({ entity }: { entity: EntityType }): React.Node => {
  const onClick = () => {
    modeVar("form");
    entityVar(entity);
  };
  return <AddButton entity={entity} setMode={onClick} />;
};
