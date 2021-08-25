// @ts-nocheck
import React from 'react';
import * as stories from './index.stories';

export default {
    title: 'Visual',
};

export const Tooltip = () => {
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
Tooltip.parameters = {
    docs: { disable: true },
};
