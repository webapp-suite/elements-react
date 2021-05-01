import { Meta } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../";
import Modal, { ModalPropTypes } from "./";
import Space from "../../stories/Space";

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
            <Modal onClose={() => setShowModal(false)} visible={showModal} title="Basic Modal">
                <div slot="main">
                    <p>
                        <b>The new product have been added to your catalog.</b>
                    </p>
                    <p>
                        Automatic Product ID: <b>PD-3465334</b>
                    </p>
                    <p>
                        Expiration date: <b>13/03/2018</b>
                    </p>
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
            <Modal onClose={() => setShowModal(false)} visible={showModal} size={size} title="Size Modal">
                <div slot="main">
                    <p>
                        <b>The new product have been added to your catalog.</b>
                    </p>
                    <p>
                        Automatic Product ID: <b>PD-3465334</b>
                    </p>
                    <p>
                        Expiration date: <b>13/03/2018</b>
                    </p>
                </div>
            </Modal>
        </>
    );
};
