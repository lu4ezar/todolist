// @flow
import * as React from "react";
import { ExitToApp as LoginIcon } from "@material-ui/icons";
import {
  IconButton,
  List,
  ListItemText,
  ClickAwayListener,
  Button,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { StyledForm, LoginDiv, StyledLI } from "./styles";
import { useCreateUserMutation, useLoginMutation } from "../../apollo/hooks";

const loginOptions = ["login", "signup", "login as guest"];

const Login = (): React.Node => {
  const [email, setEmail] = React.useState("");
  const [action, setAction] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const { loginUser, loading, error } = useLoginMutation();
  const { createUser } = useCreateUserMutation();

  const onClick = (e) => {
    e.preventDefault();
    if (action === "login") {
      loginUser({ variables: { input: { email, password } } });
    }
    if (action === "signup") {
      createUser({ variables: { input: { email, password } } });
    }
  };

  const handleSetAction = (option) => {
    setAction(option);
    setShowForm(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (loading) return "Loading!";

  if (error)
    return (
      <Alert variant="filled" severity="error">
        Error: {error.message}
      </Alert>
    );

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButton edge={false} aria-label="Login" onClick={handleClickOpen}>
          <LoginIcon />
        </IconButton>
        <LoginDiv className={open ? "open" : "closed"} active={open}>
          <List>
            {loginOptions.map((option, index) => (
              <StyledLI
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                button
                onClick={() => handleSetAction(option)}
                className={action === option ? "active" : ""}
              >
                <ListItemText>{option}</ListItemText>
              </StyledLI>
            ))}
          </List>
          <StyledForm
            onSubmit={onClick}
            className={showForm ? "show" : ""}
            action="/login"
          >
            <TextField
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Okay</Button>
          </StyledForm>
        </LoginDiv>
      </div>
    </ClickAwayListener>
  );
};
export default Login;
