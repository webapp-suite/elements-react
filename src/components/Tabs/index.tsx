import '@webapp-suite/elements.tabs';
import React, { MouseEventHandler } from 'react';
import {
    convertToWebComponent,
    WebComponentPropTypes,
} from '../../common/convertToWebComponent';

export interface TabsProps extends WebComponentPropTypes {
    /** Direction `rtl`, `ltr` */
    dir?: 'rtl' | 'ltr' | 'auto';
    onClick?: MouseEventHandler<HTMLElement>;
}

const Tabs: React.FC<TabsProps> = convertToWebComponent<TabsProps>(
    'ts-tabs',
    ['dir'],
    [],
    ['default'],
    ['click'],
    {
        click: 'tab-click',
    },
);

Tabs.displayName = 'Tabs';

Tabs.defaultProps = {
    dir: 'ltr',
};

export default Tabs;
