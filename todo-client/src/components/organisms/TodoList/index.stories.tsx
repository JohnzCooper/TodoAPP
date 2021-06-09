import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TodoList, TodoListProps } from './index';

export default {
    title: 'Organisms/TodoList',
    component: TodoList,
} as Meta;

const Template: Story<TodoListProps> = (args) => <TodoList {...args} />;

export const TodoLitsItems = Template.bind({});
TodoLitsItems.args = {
    todos : []
};
