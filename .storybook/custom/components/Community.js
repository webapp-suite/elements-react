import React from 'react';

const Community = () => {
    return (
    <div className='fddocs-community'>
        <section>
            <h4>Libraries</h4>
            <ul>
                <li><a href='https://webapp-suite.github.io/elements/' target='_blank'>@webapp-suite/elements for <strong>Web Component</strong></a></li>
                <li><a href='https://webapp-suite.github.io/elements-angular/' target='_blank'>@webapp-suite/elements-angular for <strong>Angular</strong></a></li>
                <li><a href='https://webapp-suite.github.io/elements-react/' target='_blank'>@webapp-suite/elements-react for <strong>React</strong></a></li>
                <li><a href='https://webapp-suite.github.io/elements-vue/' target='_blank'>@webapp-suite/elements-vue for <strong>Vue</strong></a></li>
            </ul>
        </section>
        <section>
        <h4>Community</h4>
            <ul>
                <li><a href='https://github.com/webapp-suite/elements' target='_blank'><img src='/storybook/images/github.png' alt='github logo'/>github.com/webapp-suite/elements</a></li>
                <li><a href='' target='_blank'><img src='/storybook/images/twitter.png' alt='twitter logo'/>twitter.com/webapp-suite/elements</a></li>
                <li><a href='' target='_blank'>
                    <img src='/storybook/images/slack.png' alt='slack logo'/>ui-webapp-suite-slack.com</a></li>
                <li><a href='' target='_blank'><img src='/storybook/images/linkedin.png' alt='linkedin logo'/>linkedin.com/company/webapp-suite</a></li>
            </ul>
        </section>
    </div>
    )
}

Community.displayName = 'Community';

export default Community;
