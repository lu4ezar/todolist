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
  Typography
} from "@material-ui/core";
import type { Filter as FilterType, FilterPayload } from "../types/filter";

type Props = {
  filter: FilterType,
  completedCount: number,
  expiredCount: number,
  setFilter: (payload: FilterPayload) => void
};

const Filter = (props: Props) => {
  const { setFilter, completedCount, expiredCount } = props;
  const {
    filterOn,
    priorityFilter,
    priorityFilterEnabled,
    completedFilter,
    completedFilterEnabled,
    expiredFilter,
    expiredFilterEnabled
  } = props.filter;

  const handleChange = name => event => {
    const {target} = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFilter({ [name]: value });
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <FormControlLabel
          label="Filter"
          labelPlacement="top"
          control={
            <Switch
              checked={filterOn}
              onChange={handleChange("filterOn")}
              value="filterOn"
            />
          }
        />
      </Grid>
      <Collapse
        in={filterOn}
        children={
          <Grid container spacing={4} justify="center">
            <Grid item>
              <Paper>
                <Grid container alignItems="center" justify="center">
                  <Grid item>
                    <Typography>off</Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={priorityFilterEnabled}
                      onChange={handleChange("priorityFilterEnabled")}
                      value="priorityFilterEnabled"
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
                    value={priorityFilter}
                    onChange={handleChange("priorityFilter")}
                    disabled={!filterOn || !priorityFilterEnabled}
                    variant="standard"
                    multiple
                  >
                    <MenuItem value="low">low</MenuItem>
                    <MenuItem value="normal">normal</MenuItem>
                    <MenuItem value="high">high</MenuItem>
                  </Select>
                </Grid>
              </Paper>
            </Grid>

            <Grid item>
              <Paper>
                <Grid container alignItems="center" justify="center">
                  <Grid item>
                    <Typography>off</Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={completedFilterEnabled}
                      onChange={handleChange("completedFilterEnabled")}
                      value="completedFilterEnabled"
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
                      checked={completedFilter}
                      onChange={handleChange("completedFilter")}
                      value="completedFilter"
                      disabled={!filterOn || !completedFilterEnabled}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>show</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item>
              <Paper>
                <Grid container alignItems="center" justify="center">
                  <Grid item>
                    <Typography>off</Typography>
                  </Grid>
                  <Grid item>
                    <Switch
                      checked={expiredFilterEnabled}
                      onChange={handleChange("expiredFilterEnabled")}
                      value="expiredFilterEnabled"
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
                      checked={expiredFilter}
                      onChange={handleChange("expiredFilter")}
                      value="expiredFilter"
                      disabled={!filterOn || !expiredFilterEnabled}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>show</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        }
      />
    </Grid>
  );
};

export default Filter;
