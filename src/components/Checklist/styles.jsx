/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { css } from "styled-components";
import { ListItem } from "@mui/material";
import { ChecklistColor } from "../../utils/color";

const {
  color,
  background,
  completedColor,
  completedBackground,
  expiredColor,
  expiredBackground,
} = ChecklistColor;

const StyledChecklist = styled(
  ({ isDragging, completed, innerRef, ...other }) => (
    <ListItem ref={innerRef} {...other} />
  )
)`
  user-select: none;
  font-weight: bold;
  color: ${color};
  border-bottom: 1px solid silver;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${background};
  & > span {
    padding-left: 1.5rem;
  }
  & > div {
    margin-left: auto;
  }
  ${({ completed }) =>
    completed === "completed" &&
    css`
      color: ${completedColor};
      border-color: ${completedColor};
      position: relative;
      overflow: hidden;
      &::after {
        content: "Done!";
        position: absolute;
        top: 60%;
        left: 27%;
        background-color: ${completedBackground};
        padding: 0.5rem 1rem 1rem;
        border-radius: 8px;
      }
    `}
  ${({ completed }) =>
    completed === "expired" &&
    css`
      color: ${expiredColor};
      border-color: ${expiredColor};
      position: relative;
      overflow: hidden;
      &::after {
        content: "Expired!";
        position: absolute;
        top: 60%;
        left: 25%;
        background-color: ${expiredBackground};
      }
    `}
`;

export default StyledChecklist;
