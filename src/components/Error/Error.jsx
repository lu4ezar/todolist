import { Alert } from "@mui/material";
import * as React from "react";

function Error({ error }: { error: Error }) {
  return (
    <Alert variant="filled" severity="error">
      Error: {error.message}
    </Alert>
  );
}

export default Error;
