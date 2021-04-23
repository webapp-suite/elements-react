import "@webapp-suite/elements.modal";
import React from "react";
import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface ModalPropTypes extends WebComponentPropTypes {
    visible: boolean;
    title?: string;
    dir?: "rtl" | "ltr" | "auto";
    size?: "small" | "medium" | "large";
    noCloseOnEscKey?: boolean;
    hideHeader?: boolean;
    noPadding?: boolean;
    onOpened?: (event: CustomEvent) => void;
    onClosed?: (event: CustomEvent) => void;
    onOpen?: (event: CustomEvent) => void;
    onClose?: (event: CustomEvent) => void;
}

const Modal: React.FC<ModalPropTypes> = convertToWebComponent<ModalPropTypes>(
    "ts-modal",
    ["title", "dir", "size"],
    ["visible", "noCloseOnEscKey", "hideHeader", "noPadding"],
    ["note", "main", "footer"],
    ["opened", "closed", "open", "close"],
    {
        title: "data-title",
        dir: "data-dir",
        size: "data-size",
        visible: "data-visible",
    }
);

Modal.displayName = "Modal";

Modal.defaultProps = {
    visible: false,
    title: "",
    dir: "ltr",
    size: "large",
    noCloseOnEscKey: false,
    hideHeader: false,
    noPadding: false,
};

export default Modal;
