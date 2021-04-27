import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from "@storybook/addon-docs/blocks";

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
        page: () => (
            <>
                <Title />
                <Subtitle />
                <Description />
                {/* <Primary /> */}
                <Stories title="Examples" includePrimary />
                <h2
                    className="sbdocs sbdocs-h3"
                    style={{
                        fontFamily:
                            '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
                    }}
                >
                    Props
                </h2>
                <ArgsTable />
            </>
        ),
    },
    // previewTabs: {
    //     canvas: { hidden: true },
    // },
};
