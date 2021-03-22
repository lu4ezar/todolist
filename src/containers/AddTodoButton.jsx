// @flow
import * as React from "react";
import { PlusCircle } from "phosphor-react";
import AddButton from "../components/AddButton";
import { entityVar, modeVar } from "../apollo/cache";

const Icon = <PlusCircle size={24} color="#8be4ff" weight="thin" />;

const AddTodoButton = () => (
  <AddButton
    icon={Icon}
    title="Add todo"
    onClick={() => {
      entityVar("todo");
      modeVar("form");
    }}
  />
);

export default AddTodoButton;
