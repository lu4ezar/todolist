// @flow
import * as React from "react";
import { ListPlus } from "phosphor-react";
import { entityVar, modeVar } from "../apollo/cache";
import AddButton from "../components/AddButton";

const Icon = <ListPlus size={48} color="#8be4ff" weight="thin" />;

const AddChecklistButton = () => (
  <AddButton
    icon={Icon}
    title="Add checklist"
    onClick={() => {
      entityVar("checklist");
      modeVar("form");
    }}
  />
);

export default AddChecklistButton;
