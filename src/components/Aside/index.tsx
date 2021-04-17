import '@webapp-suite/elements.aside';
import React from "react";
import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface AsidePropTypes extends WebComponentPropTypes {
    /** Show/hide aside */
    visible: boolean;
    /** Aside header title */
    title?: string;
    /** Direction of the component 'rtl' or 'ltr' */
    dir?: "rtl" | "ltr";
    /** If it exist as an attribute, the aside would show a spinner in it with the provided value of this attribute as the message of it */
    busy?: string;
    /** Disable closing the aside with escape key */
    noCloseOnEscKey?: boolean;
    /** Emitted when the aside is about to be opened */
    onOpen?: (event: CustomEvent) => void;
    /** Emitted when the aside is about to be closed */
    onClose?: (event: CustomEvent) => void;
    /** Emitted when the aside has been opened */
    onOpened?: (event: CustomEvent) => void;
    /** Emitted when the aside has been closed */
    onClosed?: (event: CustomEvent) => void;
}

const Aside: React.FC<AsidePropTypes> = convertToWebComponent<AsidePropTypes>(
    "ts-aside",
    ["title", "dir", "size", "busy"],
    ["visible", "noCloseOnEscKey"],
    ["note", "main", "footer", "platform-object"],
    ["opened", "closed", "open", "close"],
    {
        title: "data-title",
        visible: "data-visible",
        busy: "data-busy"
    }
);

Aside.displayName = "Aside";

Aside.defaultProps = {
    visible: false,
    title: "",
    dir: "ltr",
    noCloseOnEscKey: false
};

export default Aside;
