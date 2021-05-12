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

const Aside: React.FC<AsidePropTypes> = (props) => {
    const container = document.createElement("div");
    useEffect(() => {
        let hasAppended = false;
        if (props.visible) {
            document.body.appendChild(container);
            document.body.setAttribute("style", "width: 100%;height: 100%;position: fixed;overflow: hidden;");
            hasAppended = true;
        }
        return () => {
            if (hasAppended) {
                document.body.removeChild(container);
                document.body.removeAttribute("style");
            }
        };
    }, [props.visible]);
    return createPortal(<OriginalAside {...props}>{props.children}</OriginalAside>, container);
};

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
