// @flow
import * as React from "react";
import { Formik, Field, ErrorMessage } from "formik";
// import { ExitToApp as LoginIcon } from "@mui/icons-material";
import {
  // IconButton,
  LinearProgress,
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
import type { LoginUserInput } from "../../generated/graphql";

const loginOptions = {
  login: "login",
  signUp: "signUp",
  guest: "login as guest",
};

const initialValues: LoginUserInput = {
  email: "",
  password: "",
};

function Login({ values, isSubmitting, setValues }: Props): React.Node {
  const { email, password } = values;
  const [activeOption, setActiveOption] = React.useState(null);
  const { loginUser, loading } = useLoginMutation();
  const { createUser } = useCreateUserMutation();

  const onSubmit = (e) => {
    e.preventDefault();
    if (activeOption === loginOptions.signUp) {
      createUser({ variables: { input: { email, password } } });
    } else {
      loginUser({ variables: { input: { email, password } } });
    }
  };

  if (loading) return <LinearProgress />;

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
          className={activeOption === loginOptions.signUp ? "active" : ""}
          button
          onClick={() => setActiveOption("signUp")}
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
}

export default function Form(): React.Node {
  return <Formik component={Login} initialValues={initialValues} />;
}
