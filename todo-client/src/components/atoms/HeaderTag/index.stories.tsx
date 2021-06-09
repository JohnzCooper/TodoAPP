import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { HeaderTag, HeaderTagProps } from './index';

export default {
    title: 'Atoms/HeaderTag',
    component: HeaderTag,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<HeaderTagProps> = (args) => <HeaderTag {...args} />;

export const Headertag = Template.bind({});
Headertag.args = {
    text: "This is Header Tag",

};
