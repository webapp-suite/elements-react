import '@tradeshift/elements.aside';
import { adapt } from 'webcomponents-in-react';

const Aside = adapt("ts-aside", {
    visible: "data-visible",
    title: "data-title",
    busy: "data-busy",
    onClose: "close",
    afterClose: "closed",
    className: 'class'
});

export default Aside;
