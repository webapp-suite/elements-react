// @ts-nocheck
import React from 'react';
import * as stories from './index.stories';

export default {
    title: 'Visual',
};

export const Header = () => {
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
Header.parameters = {
    docs: { disable: true },
};
