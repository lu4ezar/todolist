import React from "react";
import AddButton from "./AddButton";

export default {
  component: AddButton,
  title: "AddButton",
};

const Template = (args) => <AddButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
