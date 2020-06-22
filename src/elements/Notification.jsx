import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const Notification = ({ notification, showMessage, closeMessage, undo }) => {
  const { open, message } = notification;

  const handleClose = (event, reason) => {
    if (!open) {
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
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
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
        </IconButton>
      ]}
    />
  );
};

export default Notification;
