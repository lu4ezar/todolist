// @flow
import * as React from "react";
import { useReactiveVar } from "@apollo/client";
import Form from "../components/Form";
import { modeVar, entityVar, errorVar } from "../apollo/cache";

export default function FormContainer(): React.Node {
  const mode = useReactiveVar(modeVar);
  const error = useReactiveVar(errorVar);
  const entity = useReactiveVar(entityVar);
  return (
    <Form
      mode={mode}
      entity={entity}
      error={error}
      closeForm={() => modeVar("list")}
    />
  );
}
