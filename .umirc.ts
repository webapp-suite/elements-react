import { defineConfig } from 'dumi';

export default defineConfig({
    title: 'elements-react',
    favicon: '/images/favicon.png',
    logo: '/images/logo.png',
    outputPath: 'docs-dist',
    styles: [
        'https://unpkg.com/@webapp-suite/elements/src/vars.css',
        'https://unpkg.com/@webapp-suite/elements/src/fonts.css',
    ],
    mode: 'site',
    dynamicImport: {
        loading: '@/Loading',
    },
    // more config: https://d.umijs.org/config
});
