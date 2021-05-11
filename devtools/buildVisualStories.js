const { lstatSync, readdirSync, writeFileSync } = require('fs');
const path = require('path');
const rimraf = require('rimraf');

console.info("Trying to clean/remove all visual stories. 🗑 ");

rimraf("**/*.visual.tsx", (rimRafError) => {
    if (rimRafError) {
        console.error("Unable to clean all visual stories!! ❌", rimRafError);
    } else {
        console.info("Removed all visual stories. 🗑 ✅");
    }

    console.info("Trying to build all visual stories. 🏗");

    const srcPath = path.join(__dirname, "../src/components");

    const isComponentDirectory = (source) => {
        const ignoredDirectories = ["utils", "Docs"];
        return lstatSync(source).isDirectory() && !ignoredDirectories.some((ignored) => source.includes(ignored));
    };

    const componentDirs = readdirSync(srcPath)
        .map((name) => path.join(srcPath, name))
        .filter(isComponentDirectory)
        .map((directory) => {
            return {
                path: `${directory}/__stories__/`,
                directoryName: directory,
                fileNames: readdirSync(`${directory}/__stories__/`),
            };
        });

    // For every component directory.
    componentDirs.map((directory) => {
        // Loop through its files.
        directory.fileNames.map((fileName) => {
            // get only stories.tsx files
            if (fileName.includes(".stories.tsx")) {
                // Grab the component name
                const componentName = directory.directoryName.split('/').slice(-1)[0];
                // TODO: reenable storyshots for examples using hooks in storybook@6
                // https://github.com/storybookjs/storybook/releases/tag/v6.0.0-alpha.43
                if (componentName === "Calendar" || componentName === "Dialog") {
                    return;
                }

                const fileContents = `
    // @ts-nocheck
    import React from 'react';
    import * as stories from './index.stories';

    export default {
        title: 'Visual'
    };

    export const ${componentName} = () => {
        let storyNames = Object.keys(stories).filter(story => {
            return story !== 'default' && story !== 'dev';
        });

        return (<>{storyNames.map((item, index) => <div key={index}>{stories[item]()}</div>)}</>);
    };
    ${componentName}.parameters = {
        docs: { disable: true }
    };
    `;
                // write the visual story file into the directory.
                let visualPath = path.join(directory.path, `index.visual.tsx`);
                writeFileSync(visualPath, fileContents);
            }
        });
    });
});
