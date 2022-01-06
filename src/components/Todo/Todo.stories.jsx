import React from "react";
import {
  text,
  boolean,
  // number
} from "@storybook/addon-knobs";
import Todo from "./Todo";

export default {
  component: Todo,
  title: "Todo",
};

const title = text("Title", "Todo with knob");
const status = boolean("Status", false);

export const withAButton = () => (
  <button type="button" disabled={status}>
    {title}
  </button>
);

function Template(args) {
  return <Todo {...args} />
}

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: "1",
    order: 1,
    title,
    completed: status,
    priority: "NORMAL",
    created: new Date(2020, 0, 1, 9, 0),
  },
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    ...Default.args.todo,
    completed: true,
  },
};

export const Expired = Template.bind({});
Expired.args = {
  todo: {
    ...Default.args.todo,
    status: "EXPIRED",
  },
};

const longTitleString = `Wow what a long title! I wonder if someone ever will give a todo such a long title, but in case it will happen one day I want to check if its gonna break this component`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  todo: {
    ...Default.args.todo,
    title: longTitleString,
  },
};
