// @flow
import * as React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {
  onClick: () => void,
  children: React.Node,
};
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
    </Toolbar>
  </AppBar>
);

export default Navbar;
