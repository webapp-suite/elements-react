// @ts-nocheck
import React from 'react';
import * as stories from './index.stories';

export default {
    title: 'Visual',
};

export const Icon = () => {
    let storyNames = Object.keys(stories).filter((story) => {
        return story !== 'default' && story !== 'dev';
    });

    return (
        <>
            {storyNames.map((item, index) => (
                <div key={index}>{stories[item]()}</div>
            ))}
        </>
    );
};
Icon.parameters = {
    docs: { disable: true },
};
