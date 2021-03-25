
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, {IDropdownProps} from '../views/components/Dropdown';

export default {
  title: 'Ecom Degree/ Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    optionsArray: ["MOST POPULAR", "LATEST RELEASES", "SHOPIFY CONTENT", "AMAZON CONTENT"]
};
