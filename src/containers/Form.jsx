// @flow
import React from "react";
import Form from "../components/Form";
import { modeVar } from "../apollo/cache";

export default () => {
  const closeForm = () => {
    modeVar("list");
  };
  return <Form closeForm={closeForm} mode={modeVar()} />;
};
