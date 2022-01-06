import React from "react";
import Login from "./Login";

export default {
  component: Login,
  title: "Login",
};

function Template() {
  return <Login />
}

export const Default = Template.bind({});
Default.args = {};

export const Enabled = Template.bind({});
Enabled.args = {};
