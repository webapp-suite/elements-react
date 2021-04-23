import React from "react";
import { Story, Meta } from "@storybook/react";

import Header, { HeaderProps } from ".";
import Button from "../Button";

export default {
    title: "Layout/Header",
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const BasicHeader = Template.bind({});
BasicHeader.args = {
    title: "My Application",
};

export const ColorHeader = Template.bind({});
ColorHeader.args = {
    color: "blue",
    title: "My Application",
};

export const ActionHeader = Template.bind({});
ActionHeader.args = {
    color: "blue",
    title: "My Application",
    children: <Button>Button</Button>,
};
