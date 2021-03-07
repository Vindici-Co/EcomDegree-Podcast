import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import PrimaryVideoCard, {IPrimaryVideoCardProps} from '../views/components/PrimaryVideoCard';

export default {
  title: 'Learning Page/Primary Video Card',
  component: PrimaryVideoCard,
} as Meta;

const Template: Story<IPrimaryVideoCardProps> = (args) => <PrimaryVideoCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  thumbnailUrl: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
  description: 'description',
  title: "title"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
