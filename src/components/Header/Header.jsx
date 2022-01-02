import * as React from "react";
import Typography from "@mui/material/Typography";
import type { Props } from "./types";

const Header = ({ text, variant = "h4" }: Props) => (
  <Typography variant={variant} style={{ flex: 1 }}>
    {text}
  </Typography>
);

export default Header;
