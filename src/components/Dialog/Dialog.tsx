import { withWebComponent, WithWebComponentPropTypes } from "../../common/withWebComponent";
import "@webapp-suite/elements.dialog";
import { FC, ReactNode, useState } from "react";

export interface DialogPropTypes extends WithWebComponentPropTypes {
    dataVisible?: boolean;
    text: string;
    icon?: string;
    type?: "confirm" | "warning" | "danger";
    translations?: {
        acceptbutton: string;
        cancelbutton: string;
    };
    focused?: string;
    primary?: string;
    onAccept?: (event: CustomEvent) => void;
    onCancel?: (event: CustomEvent) => void;
}

const Dialog: FC<DialogPropTypes> = withWebComponent<DialogPropTypes>(
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
    translations: { acceptbutton: "OK", cancelbutton: "Cancel" },
    focused: "cancel",
};

export default Dialog;
