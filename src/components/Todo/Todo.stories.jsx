import React from 'react';
import Todo from './Todo';

export default {
  component: Todo,
  title: 'Todo',
};

const Template = args => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: '1',
    order: 1,
    title: 'Test Task',
    status: 'ACTIVE',
    priority: 'NORMAL',
    created: new Date(2020, 0, 1, 9, 0),
  },
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    ...Default.args.todo,
    status: 'COMPLETED',
  },
};


export const Expired = Template.bind({});
Expired.args = {
  todo: {
    ...Default.args.todo,
    status: 'EXPIRED',
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
