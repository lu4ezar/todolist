import React from "react";
import { Navbar, Container } from "@material-ui/core";
import { Github as GithubIcon } from "@material-ui/icons";
import styled from "styled-components";
import { ListColor } from "../utils/color";

const StyledNavbar = styled(Navbar)`
  border-top: 4px solid ${ListColor.border};
  background-color: ${ListColor.background};
`;

const StyledLink = styled.a`
  color: "#fff";
  background: "transparent";
  border: "none";
`;

const Footer = () => (
  <StyledNavbar>
    <Container>
      <StyledLink
        href="https://github.com/lu4ezar/todolist"
        title="Open Github page"
      >
        <GithubIcon />
      </StyledLink>
    </Container>
  </StyledNavbar>
);

export default Footer;
