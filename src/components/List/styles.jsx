/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import { List as ListMui, Fab } from "@material-ui/core";
import { ListColor } from "../../utils/color";

export const StyledList = styled(({ isDraggingOver, innerRef, ...other }) => (
  <ListMui ref={innerRef} {...other} />
))`
  display: flex;
  overflow: auto;
  transition: background 0.4s ease;
  background: ${({ isDraggingOver }) =>
    isDraggingOver && ListColor.dragBackground};
  flex-direction: column;
  align-items: center;
`;

export const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 1em;
  right: 1em;
`;
