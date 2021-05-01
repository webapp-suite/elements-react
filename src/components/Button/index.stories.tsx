import { Meta } from "@storybook/react";

import Button, { ButtonPropTypes } from ".";
import Space from "../../stories/Space";

export default {
    title: "General/Button",
    component: Button,
    description: 'dede',
    argTypes: {
        backgroundColor: { control: "color" },
    }
} as Meta;

// With `MDX` we can define a story for `Button` right in the middle of our Markdown documentation.
export const Basic = () => <Button>Default</Button>;

// The `default` and `primary` buttons are used in most cases, you can also use other types in specific scenarios.
export const Type = () => (
    <Space>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="accept">accept</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="text">Text</Button>
    </Space>
);


// Besides default `md` size, Button component provides three additional sizes for you to choose among different scenarios.
export const Size = () => (
    <Space>
        <Button size="micro">micro</Button>
        <Button size="macro">macro</Button>
    </Space>
);
