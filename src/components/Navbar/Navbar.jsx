// @flow
import * as React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
        size="large">
        <MenuIcon />
      </IconButton>
      <Header variant="h3" text="TodoApp" />
      {isLoggedInVar() && (
        <IconButton onClick={() => isLoggedInVar(false)} size="large">
          <SignOut size={48}>LOG OUT</SignOut>
        </IconButton>
      )}
    </Toolbar>
  </AppBar>
);

export default Navbar;
