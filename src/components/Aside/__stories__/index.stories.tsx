import { useState } from "react";
import { Meta } from "@storybook/react";
import { Aside, Button } from "../../..";

export default {
    title: "Layer/Aside",
    component: Aside,
} as Meta;

export const Basic = () => {
    let [showAside, setShowAside] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setShowAside(true)}>
                Show Aside
            </Button>
            <Aside onClose={() => setShowAside(false)} visible={showAside} title="Aside">
                <div slot="main">
                    These oft shamed not mothernot now harolds tear congealed virtues. To hall riot awake parasites ye
                    his mirthful beyond. Such sighed his start glee had soon yes if, domestic days for labyrinth her
                    within in whateer vaunted. Mood few vaunted them hall felt loved than wins muse. A near sight childe
                    ne they departed earthly. Shamed his riot dome for.
                </div>
            </Aside>
        </>
    );
};
