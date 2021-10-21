import '@webapp-suite/elements.tooltip';
import React from 'react';
import {
    convertToWebComponent,
    WebComponentPropTypes,
} from '../../common/convertToWebComponent';

export interface TooltipProps extends WebComponentPropTypes {
    /** Text that should be shown in the tooltip popover */
    tooltip: string;
    /** The position of tooltip popover */
    position?: 'top' | 'bottom' | 'right' | 'left';
    /** Determining width of thee tooltip */
    width?: string;
    /** Disable the tooltip and hide it */
    disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = convertToWebComponent<TooltipProps>(
    'ts-tooltip',
    ['tooltip', 'position', 'width'],
    ['disabled'],
    ['default'],
    [],
    {},
);

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
    position: 'right',
    width: 'max-content',
    disabled: false,
};

export default Tooltip;
