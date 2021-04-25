import { Story, Meta } from "@storybook/react";

import Button, { ButtonPropTypes } from "./";

export default {
    title: "General/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta;

const Template: Story<ButtonPropTypes> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: "Button",
};

export const Type = () => (
    <>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="accept">accept</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="text">Text</Button>
    </>
);

export const Size = Template.bind({});
Size.args = {
    size: "micro",
    children: "Button",
};
