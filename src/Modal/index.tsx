import '@tradeshift/elements.modal';
import { adapt } from 'webcomponents-in-react';

const Modal = adapt("ts-modal", {
    visible: "data-visible",
    title: "data-title",
    size: "data-size",
    onClose: "close",
    onOpen: "open",
    noPadding: "no-padding",
});

export default Modal;
