import "@webapp-suite/elements.icon";
import React from "react";
import { convertToWebComponent, WebComponentPropTypes } from "../../common/convertToWebComponent";
import { sizes, types } from "../../common/utils";

export interface IconPropTypes extends WebComponentPropTypes {
    /** Icon name, ex: 'arrow-up' */
    icon: string;
    /** 'small' or 'medium' or 'large' */
    size?: string;
    /** Determining icon color, ex: 'error', 'focus' */
    type?: string;
    /** Add circular background for icon */
    circular?: boolean;
    /** 90, 180, 270 */
    rotate?: number;
    /** 'h', 'horizontal', 'v', 'vertical' */
    flip?: string;
}

const Icon: React.FC<IconPropTypes> = convertToWebComponent<IconPropTypes>(
    "ts-icon",
    ["icon", "size", "type", "rotate", "flip"],
    ["circular"],
    [],
    [],
    {}
);

Icon.defaultProps = {
    size: sizes.MEDIUM,
    type: types.DEFAULT,
    circular: false,
};

export default Icon;
