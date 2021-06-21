import { Meta } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../..";
import Modal, { ModalPropTypes } from "..";
import Space from "../../../stories/Space";

const { ModalBody, ModalFooter } = Modal;

export default {
    title: "Layer/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta;

export const Default = () => {
    let [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setShowModal(true)}>
                Default Modal
            </Button>
            <Modal onClose={() => setShowModal(false)} visible={showModal} title="Default Modal" appendOnBody>
                <ModalBody>
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs
                    shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck
                    pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank
                    andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha.
                </ModalBody>
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
                    onClick={() => {
                        setShowModal(true);
                        setSize("small");
                    }}
                >
                    Small Modal
                </Button>
                <Button
                    onClick={() => {
                        setShowModal(true);
                        setSize("medium");
                    }}
                >
                    Medium Modal
                </Button>
                <Button
                    onClick={() => {
                        setShowModal(true);
                        setSize("large");
                    }}
                >
                    Large Modal
                </Button>
            </Space>
            <Modal
                onClose={() => setShowModal(false)}
                visible={showModal}
                size={size}
                title={`${size} Modal`.replace(/^\S/, (s) => s.toUpperCase())}
                appendOnBody
            >
                <ModalBody>
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs
                    shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck
                    pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank
                    andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha.
                </ModalBody>
            </Modal>
        </>
    );
};

export const CustomizedWidth = () => {
    let [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button onClick={() => setShowModal(true)}>Modal With Customized Width</Button>
            <Modal
                onClose={() => setShowModal(false)}
                visible={showModal}
                title="Modal With Customized Width"
                width="500px"
                appendOnBody
            >
                <ModalBody>
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs
                    shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck
                    pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank
                    andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha.
                </ModalBody>
            </Modal>
        </>
    );
};

export const Footer = () => {
    let [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button onClick={() => setShowModal(true)}>Modal With Footer</Button>
            <Modal onClose={() => setShowModal(false)} visible={showModal} title="Modal With Footer" appendOnBody>
                <ModalBody>
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs
                    shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck
                    pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank
                    andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha. Modal ipsum dolor amet jerky
                    sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs shoulder tri-tip salami ribeye
                    turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck pork chop. Short ribs tail shank,
                    alcatra kevin spare ribs meatloaf beef. Pork loin salami flank andouille prosciutto chuck bresaola
                    sirloin ribeye. Bacon picanha salami filet mignon capicola beef ribs. Venison jowl meatloaf jerky
                    porchetta, brisket shank picanha. Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip salami ribeye turducken rump. Rump prosciutto
                    ham, kevin picanha drumstick chuck pork chop. Short ribs tail shank, alcatra kevin spare ribs
                    meatloaf beef. Pork loin salami flank andouille prosciutto chuck bresaola sirloin ribeye. Bacon
                    picanha salami filet mignon capicola beef ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef
                    ribs shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick
                    chuck pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami
                    flank andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola
                    beef ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha. Modal ipsum dolor amet
                    jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs shoulder tri-tip salami
                    ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank andouille prosciutto chuck
                    bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef ribs. Venison jowl meatloaf
                    jerky porchetta, brisket shank picanha. Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip salami ribeye turducken rump. Rump prosciutto
                    ham, kevin picanha drumstick chuck pork chop. Short ribs tail shank, alcatra kevin spare ribs
                    meatloaf beef. Pork loin salami flank andouille prosciutto chuck bresaola sirloin ribeye. Bacon
                    picanha salami filet mignon capicola beef ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef
                    ribs shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick
                    chuck pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami
                    flank andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola
                    beef ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha. Modal ipsum dolor amet
                    jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs shoulder tri-tip salami
                    ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank andouille prosciutto chuck
                    bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef ribs. Venison jowl meatloaf
                    jerky porchetta, brisket shank picanha. Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip salami ribeye turducken rump. Rump prosciutto
                    ham, kevin picanha drumstick chuck pork chop. Short ribs tail shank, alcatra kevin spare ribs
                    meatloaf beef. Pork loin salami flank andouille prosciutto chuck bresaola sirloin ribeye. Bacon
                    picanha salami filet mignon capicola beef ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef
                    ribs shoulder tri-tip salami ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick
                    chuck pork chop. Short ribs tail shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami
                    flank andouille prosciutto chuck bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola
                    beef ribs. Venison jowl meatloaf jerky porchetta, brisket shank picanha. Modal ipsum dolor amet
                    jerky sausage pork belly tenderloin burgdoggen kevin prosciutto beef ribs shoulder tri-tip salami
                    ribeye turducken rump. Rump prosciutto ham, kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin salami flank andouille prosciutto chuck
                    bresaola sirloin ribeye. Bacon picanha salami filet mignon capicola beef ribs. Venison jowl meatloaf
                    jerky porchetta, brisket shank picanha. Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip salami ribeye turducken rump. Rump prosciutto
                    ham, kevin picanha drumstick chuck pork chop. Short ribs tail shank, alcatra kevin spare ribs
                    meatloaf beef. Pork loin salami flank andouille prosciutto chuck bresaola sirloin ribeye. Bacon
                    picanha salami filet mignon capicola beef ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha.
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button type="primary">Create</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
