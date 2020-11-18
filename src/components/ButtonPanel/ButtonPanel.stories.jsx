
import React from 'react';
import ButtonPanel from './ButtonPanel';

export default {
  component: ButtonPanel,
  title: 'ButtonPanel',
};

const Template = args => <ButtonPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: '1',
    status: 'ACTIVE',
  },
  // toggle,
  // deleteTodo,
  // showTodo
};

export const Completed = Template.bind({});
Completed.args = {
    ...Default.args,
    todo: {
      ...Default.args.todo,
    status: 'COMPLETED'
    }
  };
