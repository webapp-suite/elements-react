import "@webapp-suite/elements.header";
import React from "react";
import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";

export interface HeaderProps extends WebComponentPropTypes {
    /** Direction of the button `rtl`, `ltr` */
    dir?: "rtl" | "ltr" | "auto";
    /** Icon shows in the header */
    icon?: string;
    /** Title shows in the header */
    title?: string;
    /** Colors of the header */
    color?: string;
}

const Header: React.FC<HeaderProps> = convertToWebComponent<HeaderProps>(
    "ts-header",
    ["dir", "color", "icon", "title"],
    [],
    [],
    [],
    {}
);

Header.displayName = "Header";

Header.defaultProps = {
    dir: "ltr",
    color: "white",
};

export default Header;
