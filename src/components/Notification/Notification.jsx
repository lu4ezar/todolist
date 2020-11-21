// @flow
import * as React from "react";
import { Snackbar, Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import type { Props } from "./types";

const Notification = ({ message, closeMessage, undo }: Props): React.Node => {
  const handleClose = (event, reason) => {
    if (!message) {
      return;
    }
    if (reason === "clickaway") {
      return;
    }
    closeMessage();
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={!!message}
      autoHideDuration={3000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id",
      }}
      message={<span id="message-id">{message}</span>}
      action={[
        <Button key="undo" color="secondary" size="small" onClick={undo}>
          UNDO
        </Button>,
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};

export default Notification;
