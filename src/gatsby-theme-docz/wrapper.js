import * as React from 'react'
import { Helmet } from 'react-helmet-async'

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>My Shadow!</title>
        {/* <link rel="icon"
            type="image/png"
              href="http://example.com/myicon.png"
        /> */}
        <link rel="stylesheet" href="/static/packages/core/src/fonts.css"/>
        <link rel="stylesheet" href="/static/packages/core/src/vars.css"/>
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper
