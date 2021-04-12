import '@webapp-suite/elements.modal';
import React from "react";
import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface ModalPropTypes extends WebComponentPropTypes {
    dataVisible: boolean;
    dataTitle?: string;
    dataDir?: string;
    dataSize?: "small" | "medium" | "large";
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
    ["dataTitle", "dataDir", "dataSize"],
    ["dataVisible", "noCloseOnEscKey", "hideHeader", "noPadding"],
    ["note", "main", "footer"],
    ["opened", "closed", "open", "close"]
);

Modal.displayName = "Modal";

Modal.defaultProps = {
    dataVisible: false,
    dataTitle: "",
    dataDir: "ltr",
    dataSize: "large",
    noCloseOnEscKey: false,
    hideHeader: false,
    noPadding: false
};

export default Modal;
