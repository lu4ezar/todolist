/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { css } from "styled-components";
import { ListItem } from "@material-ui/core";
import { TodoColor } from "../../utils/color";

const {
  color,
  background,
  completedColor,
  completedBackground,
  expiredColor,
  expiredBackground,
} = TodoColor;

const StyledTodo = styled(({ isDragging, status, innerRef, ...other }) => (
  <ListItem ref={innerRef} {...other} />
))`
	userSelect: 'none';
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
		padding-left: 0;
	}
	& > div {
		margin-left: auto
		margin: 0;
	}
	${({ status }) =>
    status === "completed" &&
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
	${({ status }) =>
    status === "expired" &&
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
    `}`;

export default StyledTodo;
