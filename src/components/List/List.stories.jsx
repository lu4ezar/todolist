import React from "react";
import List from "./index";
import Droppable from "../Droppable";
import * as TodoStories from "../Todo/Todo.stories";
import { GET_ALL } from "../../apollo/queries";
import {
  lowPriorTodo,
  normalPriorTodo,
  normalPriorChecklist,
} from "../../utils/test-utils";

export default {
  component: List,
  title: "List",
  decorator: [(story) => <Droppable>{story()}</Droppable>],
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

Default.args = {
  list: [
    {
      ...TodoStories.Default.args.todo,
      id: "1",
      title: "Task 1",
      __typename: "Todo",
    },
    {
      ...TodoStories.Default.args.todo,
      id: "2",
      title: "Task 2",
      __typename: "Todo",
    },
    {
      ...TodoStories.Default.args.todo,
      id: "3",
      title: "Task 3",
      __typename: "Todo",
    },
    {
      ...TodoStories.Default.args.todo,
      id: "4",
      title: "Task 4",
      __typename: "Todo",
    },
    {
      ...TodoStories.Default.args.todo,
      id: "5",
      title: "Task 5",
      __typename: "Todo",
    },
    {
      ...TodoStories.Default.args.todo,
      id: "6",
      title: "Task 6",
      __typename: "Todo",
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  todos: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
