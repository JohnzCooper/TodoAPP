import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './index';

export default {
    title: 'Atoms/Buttons',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const TransparentButton = Template.bind({});
TransparentButton.args = {
    label: 'Button',
    backgroundColor: 'transparent',
};

export const LabelButton = Template.bind({});
LabelButton.args = {
    label: 'Button',
    backgroundColor: 'transparent',
};