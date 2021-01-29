// @flow
import * as React from "react";
import { ListPlus, PlusCircle } from "phosphor-react";
import { Fab } from "@material-ui/core";
import type { Props } from "./types";

const AddButton = ({ setMode, entity }: Props): React.Node => (
  <Fab color="primary" title={`add ${entity}`} onClick={setMode}>
    {entity === "todo" ? (
      <PlusCircle color="#8be4ff" weight="thin" size={48} />
    ) : (
      <ListPlus color="#8be4ff" weight="thin" size={48} />
    )}
  </Fab>
);

export default AddButton;
