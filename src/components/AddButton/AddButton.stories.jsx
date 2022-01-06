import React from "react";
import AddButton from "./AddButton";

export default {
  component: AddButton,
  title: "AddButton",
};

function Template(args) {
  return <AddButton {...args} />
}

export const Default = Template.bind({});
Default.args = {};
