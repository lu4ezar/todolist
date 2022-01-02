import { Alert } from '@mui/material';
import * as React from "react";

const Error = ({ error }: { error: Error }) => (
  <Alert variant="filled" severity="error">
    Error: {error.message}
  </Alert>
);

export default Error;
