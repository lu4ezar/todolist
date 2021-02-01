import styled from "styled-components";

export const StyledForm = styled.form`
  width: 300px;
  display: none;
  &.show {
    display: block;
  }
`;

export const LoginDiv = styled.div`
  position: fixed;
  z-index: 1;
  background: inherit;
  color: #2062c5;
  border: 1px solid orange;
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
