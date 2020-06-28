import React from "react";
import Typography from "@material-ui/core/Typography";

type HeaderProps = {
  text: string,
  variant: string,
  children: React.Node,
};

const Header = ({ text, variant = "h4", children }: HeaderProps) => (
  <>
    <Typography variant={variant}>{text}</Typography>
    {children}
  </>
);

export default Header;
