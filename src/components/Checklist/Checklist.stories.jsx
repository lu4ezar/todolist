import React from "react";
import Checklist from "./Checklist";

export default {
  component: Checklist,
  title: "Checklist",
};

function Template(args) {
  return <Checklist {...args} />
}

export const Default = Template.bind({});
Default.args = {
  checklist: {
    id: "1",
    order: 1,
    title: "Test Task",
    completed: false,
    priority: "NORMAL",
    created: new Date(2020, 0, 1, 9, 0),
  },
};

export const Completed = Template.bind({});
Completed.args = {
  checklist: {
    ...Default.args.checklist,
    completed: true,
  },
};

export const Expired = Template.bind({});
Expired.args = {
  checklist: {
    ...Default.args.checklist,
    status: "EXPIRED",
  },
};

const longTitleString = `Wow what a long title! I wonder if someone ever will give a todo such a long title, but in case it will happen one day I want to check if its gonna break this component`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  checklist: {
    ...Default.args.checklist,
    title: longTitleString,
  },
};
