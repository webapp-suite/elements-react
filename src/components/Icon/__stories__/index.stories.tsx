import { Meta } from "@storybook/react";
import { types } from "../../../common/utils";

import Icon from "../../Icon";

const icons = [
    "remove",
    "download",
    "info",
    "ada",
    "checkmark",
    "search",
    "close",
    "settings",
    "support",
    "alert",
    "question",
    "apps",
    "lock",
    "discovery",
    "edit",
    "delete",
    "checkbox",
    "cancel",
    "industry",
    "network",
    "pay",
    "preview",
    "send",
    "company-size",
    "insert-from-inventory",
    "all-documents",
    "check-alt",
    "arrow-up",
    "arrow-down-short",
    "arrow-left-skip",
    "arrow-left",
    "close-clear",
    "menu-switch",
    "add-to-archive",
    "checkbox-on",
];

export default {
    title: "General/Icon",
    component: Icon,
} as Meta;

export const Basic = () => <Icon icon="info" />;

export const Size = () => (
    <>
        <Icon icon="info" size="small" />
        <Icon icon="info" size="medium" />
        <Icon icon="info" size="large" />
    </>
);

export const Type = () => (
    <>
        {Object.keys(types).map((type) => (
            <Icon icon="info" type={type} />
        ))}
    </>
);

export const circular = () => <Icon icon="info" circular />;

export const AllIcons = () => (
    <>
        {icons.map((icon) => (
            <Icon icon={icon} />
        ))}
    </>
);
