import {
    convertToWebComponent,
    WebComponentPropTypes,
} from '@/common/convertToWebComponent';
import '@webapp-suite/elements.tab';
import React, { MouseEventHandler } from 'react';

export interface TabProps extends WebComponentPropTypes {
    /** Direction `rtl`, `ltr` */
    dir?: 'rtl' | 'ltr' | 'auto';
    /** The label text for the tab */
    label: string;
    /** Make the tab selected */
    selected?: boolean;
    /** Icon name from the available icons in the icon component */
    icon?: string;
    /** Number for counter badge next to the label */
    counter?: number;
    /** (Internal) Emitted when property of the tab is changed, it's used to let the tabs know about the attribute changes. */
    onChange?: MouseEventHandler<HTMLElement>;
}

const Tab: React.FC<TabProps> = convertToWebComponent<TabProps>(
    'ts-tab',
    ['dir', 'icon', 'label', 'counter'],
    ['selected'],
    ['default'],
    ['change'],
    {
        change: 'tab-prop-change',
    },
);

Tab.displayName = 'Tab';

Tab.defaultProps = {
    dir: 'ltr',
};

export default Tab;
