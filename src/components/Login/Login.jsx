// @flow
import * as React from "react";
import { Formik, Field, ErrorMessage } from "formik";
// import { ExitToApp as LoginIcon } from "@mui/icons-material";
import {
  // IconButton,
  List,
  ListItemText,
  // ClickAwayListener,
  Button,
} from "@mui/material";
import { StyledForm, LoginDiv, StyledLI } from "./styles";
import {
  useCreateUserMutation,
  useLoginMutation,
} from "../../apollo/hooks/user";
import type { Props } from "./types";

const loginOptions = {
  login: "login",
  signup: "signup",
  guest: "login as guest",
};

const initialValues: LoginUserInput = {
  email: "",
  password: "",
};

const Login = ({ values, isSubmitting, setValues }: Props): React.Node => {
  const { email, password } = values;
  const [activeOption, setActiveOption] = React.useState(null);
  const { loginUser, loading } = useLoginMutation();
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

  const handleGuest = () => {
    setActiveOption(loginOptions.guest);
    setValues({ email: "test@mail.com", password: "testtesttest" }, false);
  };
  return (
    <LoginDiv className="open" active>
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
      <StyledForm onSubmit={onSubmit}>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <Button type="submit" disabled={isSubmitting}>
          Okay
        </Button>
      </StyledForm>
    </LoginDiv>
  );
};

export default (): React.Node => (
  <Formik component={Login} initialValues={initialValues} />
);
