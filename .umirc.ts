import { defineConfig } from 'dumi';
import pkg from './package.json';

const PUBLIC_PREFIX =
    process.env?.DEPLOY_ENV === 'GITHUB' ? '/elements-react/' : '/';

export default defineConfig({
    title: 'elements-react',
    favicon: `${PUBLIC_PREFIX}images/favicon.png`,
    logo: `${PUBLIC_PREFIX}images/logo.png`,
    outputPath: 'docs-dist',
    styles: [
        `https://unpkg.com/${pkg.name}/src/vars.css`,
        `https://unpkg.com/${pkg.name}/src/fonts.css`,
    ],
    mode: 'site',
    dynamicImport: {
        loading: '@/Loading',
    },
    base: PUBLIC_PREFIX,
    publicPath: PUBLIC_PREFIX,
    navs: [
        null, // A null value means to retain the conventionally generated navigation and only do incremental configuration
        {
            title: 'GitHub',
            path: pkg.repository.url,
        },
        {
            // https://d.umijs.org/config#navs
            title: pkg.version,
        },
    ],
    // more config: https://d.umijs.org/config
});
