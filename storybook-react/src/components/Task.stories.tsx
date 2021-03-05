import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import Task, { TaskProps } from "./Task";

export default {
  component: Task,
  title: "task",
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TAST_INBOX',
    updatedAt: new Date(),
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};


export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};