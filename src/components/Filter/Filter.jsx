/* eslint-disable react/prop-types */
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
import { PriorityValues } from "../../generated/graphql";
import type { Props } from "./types";

const Filter = ({
  filter,
  handleChange,
  completedCount,
  expiredCount,
}: Props): React.Node => {
  const {
    master: { completed: masterFilterStatus },
    priority: { completed: priorityFilterStatus, value: priorityFilterValue },
    completed: {
      completed: completedFilterStatus,
      value: completedFilterValue,
    },
    expired: { completed: expiredFilterStatus, value: expiredFilterValue },
  } = filter;
  return (
    <Grid container direction="column">
      {/* master filter */}
      <Grid item>
        <FormControlLabel
          label="Filter"
          labelPlacement="top"
          control={
            <Switch
              name="completed"
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
                    name="completed"
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
                  <MenuItem value={PriorityValues.Low}>low</MenuItem>
                  <MenuItem value={PriorityValues.Normal}>normal</MenuItem>
                  <MenuItem value={PriorityValues.High}>high</MenuItem>
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
                    name="completed"
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
                    name="completed"
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
