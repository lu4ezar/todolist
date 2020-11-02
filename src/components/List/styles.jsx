/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import { Paper, List as ListMui, Fab } from "@material-ui/core";
import { ListColor } from "../../utils/color";

export const StyledPaper = styled(Paper)`
  height: auto;
`;

export const StyledList = styled(({ isDraggingOver, ...other }) => (
  <ListMui {...other} />
))`
  height: 100%;
  flex-grow: 1;
  overflow: auto;
  transition: background 0.2s ease;
  background: ${({ isDraggingOver }) =>
    isDraggingOver && ListColor.dragBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
`;

export const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 1em;
  right: 1em;
`;
