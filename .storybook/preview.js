import DocsPage from './custom/components/DocsPage';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    // viewMode: "docs",
    options: {
        storySort: {
            method: "alphabetical",
            order: ["General", "Layout", "Layer"],
        },
    },
    docs: {
        page: DocsPage,
    },
    previewTabs: {
        canvas: { hidden: true },
    },
};
