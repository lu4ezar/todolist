// @flow
import * as React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { SignOut } from "phosphor-react";
import type { Props } from "./types";
import Header from "../Header";
import { isLoggedInVar } from "../../apollo/cache";

const Navbar = ({ onClick }: Props): React.Node => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Menu"
        onClick={onClick}
      >
        <MenuIcon />
      </IconButton>
      <Header variant="h3" text="TodoApp" />
      {isLoggedInVar() && (
        <IconButton onClick={() => isLoggedInVar(false)}>
          <SignOut size={48}>LOG OUT</SignOut>
        </IconButton>
      )}
    </Toolbar>
  </AppBar>
);

export default Navbar;
