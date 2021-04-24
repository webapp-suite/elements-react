import '@webapp-suite/elements.button';
import React, { MouseEventHandler } from "react";
import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface ButtonPropTypes extends WebComponentPropTypes {
    /** Button type to have different style */
    type?: "primary" | "secondary" | "text" | "accept" | "warning" | "danger";
    /** Size of the button */
    size?: "macro" | "micro";
    /** Direction of the component */
    dir?: "rtl" | "ltr";
    /** Icon name, see the list of available icons in ts-icon component. Also note that it will hide the slot content unless the type is text */
    icon?: string;
    /** Show busy/loading animation */
    busy?: boolean;
    /** Determine if the button is disabled. `button-click` event won't be dispatched */
    disabled?: boolean;
    /** For internal use in `ts-button-group` component */
    grouped?: boolean;
    /** Make the button focused */
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
