import { ListItem } from "@material-ui/core";
import styled from "styled-components";

export const StyledForm = styled.form`
  width: 300px;
`;

export const LoginDiv = styled.div`
  color: #2062c5;
  display: flex;
  place-content: center;
  place-items: center;
`;

export const StyledLI = styled(ListItem)`
  &.active {
    background: #94b7e9;
  }
`;
