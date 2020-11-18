import React from "react";
import { action } from "@storybook/addon-actions";
import Filter from "./Filter";

export default {
  component: Filter,
  title: "Filter",
  argTypes: { setFilter: { action: "clicked" } },
};

const Template = (args) => <Filter {...args} setFilter={action("changed")} />;

export const Default = Template.bind({});
Default.args = {
  filter: {
    master: { status: false },
    priority: { status: false, value: ["NORMAL"] },
    completed: { status: false, value: false },
    expired: { status: false, value: false },
  },
};

export const Enabled = Template.bind({});
Enabled.args = {
  ...Default.args.filter,
  filter: {
    master: { status: true },
    priority: { status: false, value: ["NORMAL"] },
    completed: { status: false, value: false },
    expired: { status: false, value: false },
  },
  completedCount: 4,
  expiredCount: 2,
};
