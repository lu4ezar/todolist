import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import {
  KeyboardArrowLeft as LeftIcon,
  KeyboardArrowRight as RightIcon,
} from "@material-ui/icons";
import styled from "styled-components";
import { TodoColor, ListColor } from "../utils/color";
import Button from "../elements/styledButton";

const options = ["3", "4", "5", "10", "20", "all"];

const StyledButtonGroup = styled(ButtonGroup)`
  background: ${ListColor.background};
  border-radius: 8px;
`;

const Menu = styled(Dropdown.Menu)`
  border: 2px solid ${ListColor.border};
  background: ${ListColor.background};
`;

const DDItem = styled(Button)`
  background: ${ListColor.dragBackground};
  border: 1px solid ${TodoColor.border};
  &:hover,
  &.active {
    background: ${TodoColor.background};
  }
`;

const PagesView = ({
  todosPerPage,
  pageNumber,
  totalPages,
  handleChange,
  listLength,
}) => {
  const dropdownItems = options.map((option, index) => {
    if (
      parseInt(option) < listLength ||
      option === todosPerPage ||
      option === "all"
    ) {
      return (
        <Dropdown.Item
          as={DDItem}
          key={index}
          eventKey={index}
          name="todosPerPage"
          value={option}
          active={option === todosPerPage}
        >
          {option === "all" ? `${option} (${listLength})` : option}
        </Dropdown.Item>
      );
    }
    return null;
  });

  <>
    <Button
      onClick={handleChange}
      name="pageNumber"
      value="descPage"
      disabled={pageNumber === 1}
    >
      <LeftIcon />
    </Button>
    <Button
      onClick={handleChange}
      name="pageNumber"
      value="ascPage"
      disabled={pageNumber === totalPages}
    >
      <RightIcon />
    </Button>
  </>;
};

export default PagesView;
