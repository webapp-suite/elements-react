import { useState } from 'react';
import { Aside, Button } from '../..';
import { Meta } from "@storybook/react";

export default {
    title: 'Layer/Aside',
    component: Aside
} as Meta;

// export const Template = (args) => <Aside {...args } />

export const primary = () => {
    let [showAside, setShowAside] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setShowAside(true)}>
                Show Aside
            </Button>
            <Aside
                onClose={() => setShowAside(false)}
                visible={showAside}
                title='Product Added'>
                <p><b>The new product have been added to your catalog.</b></p>
                <p>Automatic Product ID: <b>PD-3465334</b></p>
                <p>Expiration date: <b>13/03/2018</b></p>
            </Aside>
        </>
    );
};
