import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TodoTemplate, TodoTemplateProps } from './index';

export default {
    title: 'Templates/TodoTemplate',
    component: TodoTemplate,
} as Meta;

const Template: Story<TodoTemplateProps> = (args) => <TodoTemplate {...args} />;

export const Todo_Template = Template.bind({});
Todo_Template.args = {
    todos : []
};
