import React from "react";
import ButtonPanel from "./ButtonPanel";

export default {
  component: ButtonPanel,
  title: "ButtonPanel",
};

const Template = (args) => <ButtonPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  entity: {
    id: "1",
    completed: false,
  },
};

export const Completed = Template.bind({});
Completed.args = {
  ...Default.args,
  entity: {
    ...Default.args.todo,
    completed: true,
  },
};
