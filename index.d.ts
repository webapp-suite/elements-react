/// <reference types="react" />
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "ts-root": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            "ts-modal": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            "ts-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            "ts-aside": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export { default as Root } from './es/Root';
export { default as Button } from './es/Button';
export { default as Icon } from './es/Icon';
export { default as Tooltip } from './es/Tooltip';
export { default as Header } from './es/Header';
export { default as Modal } from './es/Modal';
export { default as Aside } from './es/Aside';
