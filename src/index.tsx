declare global {
    namespace JSX {
        interface IntrinsicElements {
            "ts-root": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

export { default as Root } from './components/Root';
export { default as Button } from './components/Button';
export { default as Icon } from './components/Icon';
export { default as Tooltip } from './components/Tooltip';
export { default as Header } from './components/Header';
export { default as Modal } from './components/Modal';
export { default as Aside } from './components/Aside';
export { default as Dialog } from './components/Dialog';
