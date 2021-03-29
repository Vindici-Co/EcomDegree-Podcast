import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import LandingPage from "../views/components/LandingPage/LandingPage";

export default {
	title: "Learning Page/Landing Page",
	component: LandingPage
} as Meta;

const Template = () => <LandingPage />;

export const Primary = Template.bind({});
