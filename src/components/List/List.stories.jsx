import React from "react";
import List from "./List";
import * as TodoStories from "../Todo/Todo.stories";

export default {
  component: List,
  title: "List",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_ALL,
        },
        result: {
          data: {
            todos: [lowPriorTodo, normalPriorTodo],
            checklists: [normalPriorChecklist],
          },
        },
      },
    ],
  },
};

/* export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
}; */

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
