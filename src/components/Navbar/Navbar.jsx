// @flow
import * as React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import type { Props } from "./types";
import Login from "../Login";

const Navbar = ({ onClick, children }: Props): React.Node => (
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
      {children}
      <Login />
    </Toolbar>
  </AppBar>
);

export default Navbar;
