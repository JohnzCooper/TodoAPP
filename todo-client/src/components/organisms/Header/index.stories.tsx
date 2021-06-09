import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from './index';

export default {
    title: 'Organisms/Header',
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderItem = Template.bind({});
HeaderItem.args = {
    titleText: "Sample Title Text",
    description: "Sample Description Text"
};
