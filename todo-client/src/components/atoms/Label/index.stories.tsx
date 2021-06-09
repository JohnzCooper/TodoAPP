import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Label, LabelProps } from './index';

export default {
    title: 'Atoms/Label',
    component: Label,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const TextLabel = Template.bind({});
TextLabel.args = {
    text: "This is a Label",
};
