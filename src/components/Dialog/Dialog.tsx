import "@webapp-suite/elements.dialog";

import React from "react";

import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface DialogPropTypes extends WebComponentPropTypes {
    visible?: boolean;
    text: string;
    icon?: string;
    type?: "info" | "warning" | "danger";
    translations?: {
        acceptButton?: string;
        cancelButton?: string;
    };
    focused?: string;
    primary?: string;
    onAccept?: (event: CustomEvent) => void;
    onCancel?: (event: CustomEvent) => void;
}

const Dialog: React.FC<DialogPropTypes> = convertToWebComponent<DialogPropTypes>(
    "ts-dialog",
    ["text", "icon", "type", "translations", "focused", "primary"],
    ["visible"],
    [],
    ["accept", "cancel"],
    {
        visible: "data-visible"
    }
);

Dialog.displayName = "Dialog";

Dialog.defaultProps = {
    visible: false,
    text: "",
    type: "info",
    translations: { acceptButton: "OK", cancelButton: "Cancel" },
    focused: "cancel",
};

export default Dialog;
