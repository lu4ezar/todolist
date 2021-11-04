// @flow
import * as React from "react";
import { PlusCircle } from "phosphor-react";
import AddButton from "../components/AddButton";
import { Scalars } from "../generated/graphql";
import { currentEntityIdVar, entityVar, modeVar } from "../apollo/cache";

const Icon = <PlusCircle size={24} color="#8be4ff" weight="thin" />;

const AddTodoButton = ({ checklist }: { checklist: Scalars.Id }) => (
  <AddButton
    icon={Icon}
    title="Add todo"
    onClick={() => {
      entityVar("todo");
      currentEntityIdVar(checklist);
      modeVar("form");
    }}
  />
);

export default AddTodoButton;
