import { Meta } from "@storybook/react";

import Header from "..";
import Button from "../../Button";

export default {
    title: "Layout/Header",
    component: Header,
} as Meta;

export const Basic = () => <Header title="My Application" />;

export const Color = () => <Header title="My Application" color="blue" />;

export const Action = () => <Header title="My Application" color="blue"><Button>Button</Button></Header>;
