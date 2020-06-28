import React from "react";
import { Navbar, Container, ButtonGroup } from "@material-ui/core";
import { Menu as MenuIcon, Block as BanIcon } from "@material-ui/icons";
import styled from "styled-components";
import { ListColor } from "../utils/color";

const StyledNavbar = styled(Navbar)`
  border-bottom: 4px solid ${ListColor.border};
  background: ${ListColor.background};
`;

type HeaderPropsType = {
  handleChange: () => void,
  clear: () => void,
};

const Header = ({ handleChange, clear }: HeaderPropsType) => (
  <StyledNavbar>
    <Container>
      <Navbar.Brand href="#">ToDoList App</Navbar.Brand>
      <ButtonGroup className="ml-auto">
        <button
          type="button"
          onClick={handleChange}
          name="mode"
          value="form"
          title="Add New Todo"
        >
          <MenuIcon />
        </button>
        <button type="button" onClick={clear} title="Clear List">
          <BanIcon />
        </button>
      </ButtonGroup>
    </Container>
  </StyledNavbar>
);

export default Header;
