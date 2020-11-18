
import React from 'react';
import Filter from './Filter';

export default {
  component: Filter,
  title: 'Filter',
};

const Template = args => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  setFilter,                                           completedCount,
    expiredCount,                                        filter: {
      master: { status: masterFilterStatus },              priority: { status: priorityFilterStatus, value: priorityFilterValue },                                   completed: { status: completedFilterStatus, val
ue: completedFilterValue },                                expired: { status: expiredFilterStatus, value: expiredFilterValue }
    }
};

export const Enabled = Template.bind({});
Enabled.args = {};

