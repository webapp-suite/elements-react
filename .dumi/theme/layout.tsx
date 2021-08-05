import React from 'react';
import Layout from 'dumi-theme-default/src/layout';
import { Root } from '@/index';
import ScrollToTop from './ScrollToTop';
import './style/layout.less';

// @ts-ignore
export default (props) => (
    <ScrollToTop>
        <Root>
            {/* @ts-ignore */}
            <Layout {...props} />
        </Root>
    </ScrollToTop>
);
