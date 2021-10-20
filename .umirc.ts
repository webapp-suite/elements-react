import { defineConfig } from 'dumi';

const PUBLIC_PREFIX =
    process.env?.DEPLOY_ENV === 'GITHUB' ? '/elements-react/' : '/';

export default defineConfig({
    title: 'elements-react',
    favicon: `${PUBLIC_PREFIX}images/favicon.png`,
    logo: `${PUBLIC_PREFIX}images/logo.png`,
    outputPath: 'docs-dist',
    styles: [
        'https://unpkg.com/@webapp-suite/elements/src/vars.css',
        'https://unpkg.com/@webapp-suite/elements/src/fonts.css',
    ],
    mode: 'site',
    dynamicImport: {
        loading: '@/Loading',
    },
    base: PUBLIC_PREFIX,
    publicPath: PUBLIC_PREFIX,
    // more config: https://d.umijs.org/config
});
