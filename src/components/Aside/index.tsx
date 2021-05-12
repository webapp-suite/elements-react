import '@webapp-suite/elements.aside';
import React, { useEffect } from "react";
import { createPortal } from 'react-dom';
import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface AsidePropTypes extends WebComponentPropTypes {
    /** Show/hide aside */
    visible: boolean;
    /** Aside header title */
    title?: string;
    /** Direction of the component 'rtl' or 'ltr' */
    dir?: "rtl" | "ltr" | "auto";
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

class Aside extends React.Component<AsidePropTypes> {
    container: HTMLDivElement;
    static defaultProps: AsidePropTypes;
    constructor(props: AsidePropTypes) {
        super(props);
        this.container = document.createElement("div");
    }

    componentDidUpdate(prevProps: AsidePropTypes) {
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
        return createPortal(<OriginalAside {...this.props}>{this.props.children}</OriginalAside>, this.container);
    }
}

const OriginalAside: React.FC<AsidePropTypes> = convertToWebComponent<AsidePropTypes>(
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

Aside.defaultProps = {
    visible: false,
    title: "",
    dir: "ltr",
    noCloseOnEscKey: false
};

export default Aside;
