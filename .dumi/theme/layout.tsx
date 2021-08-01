import React from 'react';
import Layout from 'dumi-theme-default/src/layout';
import { Root } from '@/index';
import './style/layout.less';

// @ts-ignore
export default (props) => (
    <Root>
        {/* @ts-ignore */}
        <Layout {...props} />
    </Root>
);
