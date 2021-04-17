import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs/blocks';
import { useState } from 'react';
import { Aside, Button } from '../';

<Meta title="Example/Aside" component={Aside} />

// export const Template = (args) => <Aside {...args } />

export default {
    title: 'Example/Aside',
    component: Aside
};

export const primary = () => {
    let [showAside, setShowAside] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setShowAside(true)}>
                Show Aside
            </Button>
            <Aside
                // actions={[
                //     (<Button option='transparent'>No</Button>),
                //     (<Button>Yes</Button>)
                // ]}
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
