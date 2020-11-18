import React from 'react';
import List from './List';
import * as TodoStories from '../Todo/Todo.stories';

export default {
  component: List,
  title: 'List',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  todos: [
    { ...TodoStories.Default.args.todo, id: '1', title: 'Task 1' },
    { ...TodoStories.Default.args.todo, id: '2', title: 'Task 2' },
    { ...TodoStories.Default.args.todo, id: '3', title: 'Task 3' },
    { ...TodoStories.Default.args.todo, id: '4', title: 'Task 4' },
    { ...TodoStories.Default.args.todo, id: '5', title: 'Task 5' },
    { ...TodoStories.Default.args.todo, id: '6', title: 'Task 6' },
  ],
};

/* export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};*/

export const Loading = Template.bind({});
Loading.args = {
  todos: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
