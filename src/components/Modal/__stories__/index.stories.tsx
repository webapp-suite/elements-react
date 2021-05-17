import { Meta } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../..";
import Modal, { ModalPropTypes } from "..";
import Space from "../../../stories/Space";

export default {
    title: "Layer/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta;

export const Basic = () => {
    let [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setShowModal(true)}>
                Show Modal
            </Button>
            <Modal onClose={() => setShowModal(false)} visible={showModal} title="Basic Modal" appendOnBody>
                <div slot="main">
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs
                    shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck
                    pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank
                    andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha.
                </div>
            </Modal>
        </>
    );
};

export const Size = () => {
    let [showModal, setShowModal] = useState(false);
    let [size, setSize] = useState<ModalPropTypes["size"]>("small");
    return (
        <>
            <Space>
                <Button
                    type="primary"
                    onClick={() => {
                        setShowModal(true);
                        setSize("small");
                    }}
                >
                    Show Small Modal
                </Button>
                <Button
                    onClick={() => {
                        setShowModal(true);
                        setSize("medium");
                    }}
                >
                    Show Medium Modal
                </Button>
            </Space>
            <Modal
                onClose={() => setShowModal(false)}
                visible={showModal}
                size={size}
                title={`${size} Modal`.replace(/^\S/, (s) => s.toUpperCase())}
                appendOnBody
            >
                <div slot="main">
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs
                    shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck
                    pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank
                    andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha.
                </div>
            </Modal>
        </>
    );
};
