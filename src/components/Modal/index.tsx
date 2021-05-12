import "@webapp-suite/elements.modal";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
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

class Modal extends React.Component<ModalPropTypes> {
    container: HTMLDivElement;
    static defaultProps: ModalPropTypes;
    constructor(props: ModalPropTypes) {
        super(props);
        this.container = document.createElement("div");
    }

    componentDidUpdate(prevProps: ModalPropTypes) {
        // Open
        if (!prevProps.visible && this.props.visible) {
            document.body.appendChild(this.container);
            document.body.setAttribute("style", "width: 100%;height: 100%;position: fixed;overflow: hidden;");
        }
        // Close
        if (prevProps.visible && !this.props.visible) {
            document.body.removeChild(this.container);
            document.body.removeAttribute("style");
        }
    }

    componentWillUnmount() {
        if (document.body.contains(this.container)) {
            document.body.removeChild(this.container);
            document.body.removeAttribute("style");
        }
    }

    render() {
        return createPortal(<OriginalModal {...this.props}>{this.props.children}</OriginalModal>, this.container);
    }
}

const OriginalModal: React.FC<ModalPropTypes> = convertToWebComponent<ModalPropTypes>(
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

Modal.defaultProps = {
    visible: false,
    title: "",
    dir: "ltr",
    size: "large",
    noCloseOnEscKey: false,
    hideHeader: false,
    noPadding: false,
};

export const ModalBody: React.FC = ({ children }) => <div slot="main">{children}</div>;

export const ModalFooter: React.FC = ({ children }) => <div slot="footer">{children}</div>;

export default Modal;
