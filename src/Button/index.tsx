import '@tradeshift/elements.button';
import { adapt } from 'webcomponents-in-react';

const Button = adapt("ts-button", {
    className: 'class',
    onClick: 'button-click'
});

export default Button;
