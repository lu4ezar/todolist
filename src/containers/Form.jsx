// @flow
import * as React from "react";
import { useReactiveVar } from "@apollo/client";
import Form from "../components/Form";
import { modeVar, entityVar } from "../apollo/cache";

export default function FormContainer(): React.Node {
  const mode = useReactiveVar(modeVar);
  const entity = useReactiveVar(entityVar);
  return <Form mode={mode} entity={entity} closeForm={() => modeVar("list")} />;
}
