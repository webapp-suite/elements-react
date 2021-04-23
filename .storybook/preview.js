export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewMode: "docs",
    options: {
        storySort: {
            method: "alphabetical",
            order: [
                "General",
                "Layout",
                "Layer",
            ],
        },
    },
    // previewTabs: {
    //     canvas: { hidden: true },
    // },
};
