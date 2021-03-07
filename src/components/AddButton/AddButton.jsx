// @flow
import * as React from "react";
import { ListPlus, PlusCircle } from "phosphor-react";
import { Fab } from "@material-ui/core";
import { entityVar, modeVar } from "../../apollo/cache";
import type { Props } from "./types";

const AddButton = ({ entity = "Checklist", size = 48 }: Props): React.Node => (
  <Fab
    color="primary"
    title={`add ${entity}`}
    onClick={() => {
      entityVar(entity);
      modeVar("form");
    }}
  >
    {entity === "todo" ? (
      <PlusCircle color="#8be4ff" weight="thin" size={size} />
    ) : (
      <ListPlus color="#8be4ff" weight="thin" size={size} />
    )}
  </Fab>
);

export default AddButton;
