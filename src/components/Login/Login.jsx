// @flow
import * as React from "react";
import { ExitToApp as LoginIcon } from "@material-ui/icons";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ClickAwayListener,
  Button,
  TextField,
} from "@material-ui/core";
import { StyledForm, LoginDiv } from "./styles";
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
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
    // e.target.name === "email"
    //   ? setEmail(e.target.value)
    //   : setPassword(e.target.value);
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
  if (error) return `Error! ${error.message}`;
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <IconButton edge={false} aria-label="Login" onClick={handleClickOpen}>
          <LoginIcon />
        </IconButton>
        <LoginDiv className={open ? "open" : "closed"} active={open}>
          <List>
            {loginOptions.map((option, index) => (
              <ListItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                button
                onClick={() => handleSetAction(option)}
                // onClick={() => {}}
              >
                <ListItemText>{option}</ListItemText>
              </ListItem>
            ))}
          </List>
          <StyledForm
            onSubmit={onClick}
            className={showForm ? "show" : ""}
            action="/login"
          >
            <TextField type="email" name="email" onChange={handleChange} />
            <TextField
              type="password"
              name="password"
              onChange={handleChange}
            />
            <Button type="submit">Okay</Button>
          </StyledForm>
        </LoginDiv>
      </div>
    </ClickAwayListener>
  );
};
export default Login;
