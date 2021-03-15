import "@webapp-suite/elements.dialog";

import React from "react";

import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface DialogPropTypes extends WebComponentPropTypes {
    dataVisible?: boolean;
    text: string;
    icon?: string;
    type?: "confirm" | "warning" | "danger";
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
    ["dataVisible"],
    [],
    ["accept", "cancel"]
);

Dialog.displayName = "Dialog";

Dialog.defaultProps = {
    dataVisible: false,
    text: "",
    type: "confirm",
    translations: { acceptButton: "OK", cancelButton: "Cancel" },
    focused: "cancel",
};

export default Dialog;
