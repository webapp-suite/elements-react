import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps: { location: { pathname: any } }) {
        // @ts-ignore
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const root = document.querySelector('ts-root');
            root?.shadowRoot
                ?.querySelector('[part="content-main"]')
                ?.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

// @ts-ignore
export default withRouter(ScrollToTop);
