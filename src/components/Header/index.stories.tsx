import React from "react";
import { Story, Meta } from "@storybook/react";

import Header, { HeaderProps } from ".";
import Button from "../Button";

export default {
    title: "Layout/Header",
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    title: "My Application",
};

export const Color = Template.bind({});
Color.args = {
    color: "blue",
    title: "My Application",
};

export const Action = Template.bind({});
Action.args = {
    color: "blue",
    title: "My Application",
    children: <Button>Button</Button>,
};
