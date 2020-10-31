// @flow
import * as React from "react";
import {
  Grid,
  Switch,
  Select,
  Badge,
  MenuItem,
  FormControlLabel,
  Collapse,
  Paper,
  Typography,
} from "@material-ui/core";
import type {
  Filter as FilterType,
  FilterName,
  FilterValue,
  FilterStatus,
  ActionPayload,
  PriorityFilterValue,
  CompletedFilterValue,
  ExpiredFilterValue,
} from "../types/filter";
import { TodoPriorityValues } from "../generated/graphql";

type Props = {
  filter: FilterType,
  completedCount: number,
  expiredCount: number,
  setFilter: (payload: ActionPayload) => void,
};

const Filter = (props: Props): React.Node => {
  const {
    setFilter,
    completedCount,
    expiredCount,
    filter: {
      master: { status: masterFilterStatus },
      priority: { status: priorityFilterStatus, value: priorityFilterValue },
      completed: { status: completedFilterStatus, value: completedFilterValue },
      expired: { status: expiredFilterStatus, value: expiredFilterValue },
    },
  } = props;

  const handleChange = (filterName: FilterName) => (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => {
    // MUI Select does not have currentTarget
    const target: HTMLInputElement = event.target.type
      ? event.currentTarget
      : event.target;
    const value: FilterValue =
      target.type === "checkbox"
        ? (target.checked:
            | FilterStatus
            | CompletedFilterValue
            | ExpiredFilterValue)
        : // $FlowFixMe
          (target.value: PriorityFilterValue);
    const { name } = target;

    setFilter({
      filter: filterName,
      // $FlowFixMe
      property: name,
      value,
    });
  };

  return (
    <Grid container direction="column">
      {/* master filter */}
      <Grid item>
        <FormControlLabel
          label="Filter"
          labelPlacement="top"
          control={
            <Switch
              name="status"
              checked={masterFilterStatus}
              onChange={handleChange("master")}
              value={masterFilterStatus}
            />
          }
        />
      </Grid>
      <Collapse in={masterFilterStatus}>
        <Grid container spacing={4} justify="center">
          {/* priority filter */}
          <Grid item>
            <Paper>
              <Grid container alignItems="center" justify="center">
                <Grid item>
                  <Typography>off</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    name="status"
                    checked={priorityFilterStatus}
                    onChange={handleChange("priority")}
                    value={priorityFilterStatus}
                  />
                </Grid>
                <Grid item>
                  <Typography>on</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justify="center">
                <Grid item>
                  <Typography>Priority</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Select
                  name="value"
                  value={priorityFilterValue}
                  onChange={handleChange("priority")}
                  disabled={!masterFilterStatus || !priorityFilterStatus}
                  variant="standard"
                  multiple
                >
                  <MenuItem value={TodoPriorityValues.Low}>low</MenuItem>
                  <MenuItem value={TodoPriorityValues.Normal}>normal</MenuItem>
                  <MenuItem value={TodoPriorityValues.High}>high</MenuItem>
                </Select>
              </Grid>
            </Paper>
          </Grid>
          {/* completed filter */}
          <Grid item>
            <Paper>
              <Grid container alignItems="center" justify="center">
                <Grid item>
                  <Typography>off</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    name="status"
                    checked={completedFilterStatus}
                    onChange={handleChange("completed")}
                    value="completedFilterStatus"
                  />
                </Grid>
                <Grid item>
                  <Typography>on</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justify="center">
                <Grid item>
                  <Badge color="primary" badgeContent={completedCount}>
                    <Typography>Completed</Typography>
                  </Badge>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography>hide</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    name="value"
                    checked={completedFilterValue}
                    onChange={handleChange("completed")}
                    value="completedFilter"
                    disabled={!masterFilterStatus || !completedFilterStatus}
                  />
                </Grid>
                <Grid item>
                  <Typography>show</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* expired filter */}
          <Grid item>
            <Paper>
              <Grid container alignItems="center" justify="center">
                <Grid item>
                  <Typography>off</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    name="status"
                    checked={expiredFilterStatus}
                    onChange={handleChange("expired")}
                    value="expiredFilterStatus"
                  />
                </Grid>
                <Grid item>
                  <Typography>on</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justify="center">
                <Grid item>
                  <Badge color="secondary" badgeContent={expiredCount}>
                    <Typography>Expired</Typography>
                  </Badge>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography>hide</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    name="value"
                    checked={expiredFilterValue}
                    onChange={handleChange("expired")}
                    value="expiredFilter"
                    disabled={!masterFilterStatus || !expiredFilterStatus}
                  />
                </Grid>
                <Grid item>
                  <Typography>show</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Collapse>
    </Grid>
  );
};

export default Filter;
