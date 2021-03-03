import { ListItem } from "@material-ui/core";
import styled from "styled-components";

export const StyledForm = styled.form`
  width: 300px;
`;

export const LoginDiv = styled.div`
  position: fixed;
  z-index: 1;
  background: inherit;
  color: #2062c5;
  border: 1px solid #acb8eb;
  border-radius: 5px;
  display: none;
  &.open {
    background: #fff;
    display: block;
  }
  &.closed {
    border: 2px solid black;
    background: #ae37f3;
  }
  &::active {
    color: red;
    background: #310909;
  }
`;

export const StyledLI = styled(ListItem)`
  &.active {
    background: #94b7e9;
  }
`;
