import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './index';

export default {
    title: 'Atoms/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputTypeText = Template.bind({});
InputTypeText.args = {
    type: "text",
    placeholder: "Type something here"
};

export const InputTypeEmail = Template.bind({});
InputTypeEmail.args = {
    type: "email",
    placeholder: "Type something here"
};

export const InputTypePassword = Template.bind({});
InputTypeEmail.args = {
    type: "password",
    placeholder: "Type something here"
};

