// @flow
import { Alert } from "@material-ui/lab";
import * as React from "react";

const Error = ({ error }: { error: Error }) => (
  <Alert variant="filled" severity="error">
    Error: {error.message}
  </Alert>
);

export default Error;
