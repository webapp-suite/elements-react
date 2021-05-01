import React from 'react';

const Footer = () => {
    return (
    <footer className='fddocs-footer'>
        <section className='fddocs-footer--left'>
            <span className='fddocs-footer__slogan'>THE BEST RUN</span>
            <img
                src='/storybook/images/logo-gray.png'
                alt='Webapp Suite logo'
                height='16' />
            <p className='fddocs-footer__copyright'>&copy; Copyright Webapp Suite {`${new Date().getFullYear()}`}</p>
        </section>
        <section className='fddocs-footer--right'>
            <a href='' target='_blank'>Privacy</a>
            <a href='' target='_blank'>Legal Disclosure</a>
            <a href='' target='_blank'>Copyright and Trademarks</a>
            <a href='' target='_blank'>Terms of Use</a>
        </section>
    </footer>
    )
}

Footer.displayName = 'Footer';

export default Footer;
