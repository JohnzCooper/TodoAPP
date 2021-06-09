import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AddTodo, AddTodoProps } from './index';

export default {
    title: 'Molecules/AddTodo',
    component: AddTodo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<AddTodoProps> = (args) => <AddTodo {...args} />;

export const AddTodoItem = Template.bind({});
AddTodoItem.args = {
    
};
