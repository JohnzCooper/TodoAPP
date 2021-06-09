import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Todo, TodoProps } from './index';

export default {
    title: 'Molecules/Todo',
    component: Todo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<TodoProps> = (args) => <Todo {...args} />;

export const TodoItem = Template.bind({});
TodoItem.args = {
};
