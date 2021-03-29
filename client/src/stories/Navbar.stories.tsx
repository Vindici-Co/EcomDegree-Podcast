import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Navbar from "../views/components/Navbar/Navbar";

export default {
	title: "Ecom Degree/ Navbar",
	component: Navbar
} as Meta;

const Template = () => <Navbar />;

export const Primary = Template.bind({});
