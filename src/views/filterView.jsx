import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Collapse from "react-bootstrap/Collapse";
import { TodoColor, ListColor } from "../utils/color";
import Switch from "../elements/switch";
import Select from "../elements/select";

const switchStyle = {
  handleDiameter: 5,
  height: 18,
  width: 56,
  offColor: `${TodoColor.background}`,
  onColor: `${ListColor.dragBackground}`,
  offHandleColor: `${ListColor.border}`,
  onHandleColor: `#000`,
  uncheckedIcon: false,
  checkedIcon: false
};

const StyledContainer = styled.div`
  background: ${ListColor.background};
  border: 2px solid ${ListColor.border};
  border-radius: 8px;
  padding: 15px;
  margin: 1em auto;
`;

const FilterRow = styled(Row)`
  border-top: 2px solid ${ListColor.border};
  border-bottom: 2px solid ${ListColor.border};
  margin: 2px 0px;
`;

const Label = styled.label`
  margin-top: 0.5em;
`;

const FilterView = ({
  filterIsActive,
  priorityFilterStatus,
  priorityFilterValue,
  completedFilterStatus,
  completed,
  expiredFilterStatus,
  expired,
  onSwitch,
  handleChange,
  completedCount,
  expiredCount
}) => (
  <StyledContainer>
    <FilterRow className="align-items-center">
      <Label htmlFor="filterIsActive">
        <b>Filter</b>
      </Label>
      <div className="ml-auto">
        <Switch
          id="filterIsActive"
          state={filterIsActive}
          onSwitch={onSwitch}
        />
      </div>
    </FilterRow>
    <FilterRow>
      <Col>
        <Row className="align-items-center">
          <Label htmlFor="priorityFilterStatus">
            <b>Priority</b>
          </Label>
          <div className="ml-auto">
            <Switch
              id="priorityFilterStatus"
              state={priorityFilterStatus}
              disabled={!filterIsActive}
              onSwitch={onSwitch}
            />
          </div>
        </Row>
        <Collapse in={priorityFilterStatus && filterIsActive}>
          <Row className="justify-content-center">
            <Select
              value={priorityFilterValue}
              placeholder="Priority"
              onChange={handleChange}
              disabled={!filterIsActive || !priorityFilterStatus}
              isMulti
            />
          </Row>
        </Collapse>
      </Col>
    </FilterRow>
    <FilterRow>
      <Col>
        <Row className="justify-content-end">
          <Label htmlFor="completedFilterStatus">
            <b>Completed</b> <Badge variant="dark">{completedCount}</Badge>
          </Label>
        </Row>
        <Row className="my-2">
          <Switch
            id="completedFilterStatus"
            state={completedFilterStatus}
            disabled={!filterIsActive}
            onSwitch={onSwitch}
            {...switchStyle}
          />
          <div className="ml-auto">
            <Switch
              id="completed"
              state={completed}
              onSwitch={onSwitch}
              disabled={!filterIsActive || !completedFilterStatus}
              textLeft="hide"
              textRight="show"
              {...switchStyle}
            />
          </div>
        </Row>
      </Col>
    </FilterRow>
    <FilterRow className="align-items-center">
      <Col>
        <Row>
          <div className="ml-auto">
            <Label htmlFor="completedFilterStatus">
              <b>Expired</b> <Badge variant="dark">{expiredCount}</Badge>
            </Label>
          </div>
        </Row>
        <Row className="my-2">
          <div>
            <Switch
              id="expiredFilterStatus"
              state={expiredFilterStatus}
              disabled={!filterIsActive}
              onSwitch={onSwitch}
              {...switchStyle}
            />
          </div>
          <div className="ml-auto">
            <Switch
              id="expired"
              state={expired}
              disabled={!filterIsActive || !expiredFilterStatus}
              onSwitch={onSwitch}
              textLeft="hide"
              textRight="show"
              {...switchStyle}
            />
          </div>
        </Row>
      </Col>
    </FilterRow>
  </StyledContainer>
);

FilterView.propTypes = {
  filterIsActive: PropTypes.bool.isRequired,
  priorityFilterStatus: PropTypes.bool.isRequired,
  priorityFilterValue: PropTypes.array.isRequired,
  completedFilterStatus: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  expiredFilterStatus: PropTypes.bool.isRequired,
  expired: PropTypes.bool.isRequired,
  onSwitch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  completedCount: PropTypes.number.isRequired,
  expiredCount: PropTypes.number.isRequired
};

export default FilterView;
