import * as React from "react";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Fab,
} from "@material-ui/core";
import { Close as CloseIcon, Check as CheckIcon } from "@material-ui/icons";
import Todo from "../../Todo";
import getExpireState from "../../utils/luxon";
import Drawer from "../../elements/Drawer";
import Header from "../../elements/Header";
import type { Props } from "./types";

const initialState = new Todo();

const Form = ({ todo, mode, submit, closeForm }: Props) => {
  const [state, setState] = React.useState(initialState);
  // check if todo was set to prevent already entered form data from erasing on form close
  React.useEffect(() => {
    if (todo) {
      setState(todo);
    } else {
      setState(initialState);
    }
  }, [todo]);

  const onSubmit = (e) => {
    e.preventDefault();
    state.status = getExpireState(state);
    submit(state);
    setState(initialState);
  };

  const clearForm = () => {
    if (todo) {
      setState(todo);
    } else {
      setState(initialState);
    }
  };

  const onChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const disableButtons =
    todo && todo.id
      ? JSON.stringify(todo) !== JSON.stringify(state)
      : state.task && state.description;

  return (
    <Drawer side="right" open={mode !== "list"} toggleDrawer={closeForm}>
      <form data-testid="form" id="form" onSubmit={onSubmit}>
        <Header
          text={`${
            mode === "form"
              ? "Add new"
              : mode.charAt(0).toUpperCase() + mode.slice(1)
          } todo`}
        />

        <fieldset disabled={mode === "view"}>
          <TextField
            id="task"
            label="Task"
            value={state.task}
            onChange={onChange("task")}
            margin="normal"
            required
          />
          <br />
          <TextField
            id="description"
            label="Description"
            multiline
            rowsMax="4"
            value={state.description}
            onChange={onChange("description")}
            margin="normal"
            required
          />
          <br />
          <FormControl>
            <InputLabel htmlFor="priority">Priority</InputLabel>
            <Select
              value={state.priority || "normal"}
              onChange={handleSelectChange}
              inputProps={{
                name: "priority",
                id: "priority",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="normal">Normal</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
          <br />
          <InputLabel htmlFor="date">Date&Time:</InputLabel>
          <TextField
            id="date"
            value={state.date}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange("date")}
          />
          <TextField
            id="time"
            value={state.time}
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
            onChange={onChange("time")}
          />
        </fieldset>
        {mode !== "view" && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Fab
              color="secondary"
              size="small"
              onClick={clearForm}
              disabled={!disableButtons}
            >
              <CloseIcon />
            </Fab>
            <Fab
              data-testid="submit"
              type="submit"
              color="primary"
              size="small"
              form="form"
              disabled={!disableButtons}
            >
              <CheckIcon />
            </Fab>
          </div>
        )}
      </form>
    </Drawer>
  );
};

export default Form;
