import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import LearningCard, { ILearningCardProps } from "../views/components/LearningCard";

export default {
	title: "Learning Page/LearningCard",
	component: LearningCard
} as Meta;

const Template: Story<ILearningCardProps> = (args) => <LearningCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	cardThumbnail:
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1OtaIHbKuEeGtlTLhhR0RQHaE8%26pid%3DApi&f=1",
	platformType: "shopify"
};
