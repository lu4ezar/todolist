// @flow
import * as React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { ExitToApp as LoginIcon } from "@material-ui/icons";
import {
  IconButton,
  List,
  ListItemText,
  ClickAwayListener,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { StyledForm, LoginDiv, StyledLI } from "./styles";
import { useCreateUserMutation, useLoginMutation } from "../../apollo/hooks";

const loginOptions = {
  login: "login",
  signup: "signup",
  guest: "login as guest",
};

const Login = ({ values, isSubmitting, setValues }: Props): React.Node => {
  const { email, password } = values;
  const [activeOption, setActiveOption] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const { loginUser, loading, error } = useLoginMutation();
  const { createUser } = useCreateUserMutation();

  const onSubmit = (e) => {
    e.preventDefault();
    if (activeOption === loginOptions.signup) {
      createUser({ variables: { input: { email, password } } });
    } else {
      loginUser({ variables: { input: { email, password } } });
    }
  };

  if (loading) return "Loading!";

  if (error)
    return (
      <Alert variant="filled" severity="error">
        Error: {error.message}
      </Alert>
    );

  const handleGuest = () => {
    setActiveOption(loginOptions.guest);
    setValues({ email: "test@mail.com", password: "testtesttest" }, false);
  };
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <IconButton edge="end" aria-label="Login" onClick={() => setOpen(true)}>
          <LoginIcon />
        </IconButton>
        <LoginDiv className={open ? "open" : "closed"} active>
          <List>
            <StyledLI
              className={activeOption === loginOptions.login ? "active" : ""}
              button
              onClick={() => setActiveOption("login")}
            >
              <ListItemText>LOG IN</ListItemText>
            </StyledLI>
            <StyledLI
              className={activeOption === loginOptions.signup ? "active" : ""}
              button
              onClick={() => setActiveOption("signup")}
            >
              <ListItemText>SIGN UP</ListItemText>
            </StyledLI>
            <StyledLI
              className={activeOption === loginOptions.guest ? "active" : ""}
              button
              onClick={handleGuest}
            >
              <ListItemText>LOGIN AS GUEST</ListItemText>
            </StyledLI>
          </List>
          {activeOption !== null && (
            <StyledForm onSubmit={onSubmit}>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <Button type="submit" disabled={isSubmitting}>
                Okay
              </Button>
            </StyledForm>
          )}
        </LoginDiv>
      </div>
    </ClickAwayListener>
  );
};

export default (): React.Node => (
  <Formik component={Login} initialValues={{ email: "", password: "" }} />
);
