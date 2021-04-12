import '@webapp-suite/elements.button';
import React, { MouseEventHandler } from "react";
import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface ButtonPropTypes extends WebComponentPropTypes {
    type?: "primary" | "secondary" | "text" | "accept" | "warning" | "danger";
    size?: "macro" | "micro";
    dir?: "rtl" | "ltr";
    icon?: string;
    busy?: boolean;
    disabled?: boolean;
    grouped?: boolean;
    focused?: boolean;
    onClick?: MouseEventHandler<HTMLElement>;
}

const Button: React.FC<ButtonPropTypes> = convertToWebComponent<ButtonPropTypes>(
    "ts-button",
    ["type", "size", "dir", "icon"],
    ["busy", "disabled", "grouped", "focused"],
    ["default"],
    ["click"],
    {
        click: "button-click"
    }
);

Button.displayName = "Button";

Button.defaultProps = {
    type: "secondary",
    busy: false,
    dir: "ltr",
    disabled: false,
    grouped: false,
    focused: false,
};

export default Button;
