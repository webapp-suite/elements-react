import ReactDOM from "react-dom";
import { DialogFuncProps, DialogStaticFunctions } from "./dialogFunc";
import OriginDialog from "./Dialog";

type DialogType = typeof OriginDialog & DialogStaticFunctions;

type DialogFuncPropsOmitType = Pick<DialogFuncProps, Exclude<keyof DialogFuncProps, 'type'>>;

const Dialog = OriginDialog as DialogType;

const dialogFunc = ({ text, translations, focused, onAccept, onCancel, type }: DialogFuncProps) => {
    const div = document.createElement("div");
    const rootElem = document.querySelector("ts-root") ?? document.body;
    rootElem.appendChild(div);
    return ReactDOM.render(
        <OriginDialog
            dataVisible={true}
            text={text}
            type={type}
            translations={translations}
            focused={focused}
            onAccept={onAccept}
            onCancel={onCancel}
        />,
        div
    );
};

Dialog.info = function infoFn(props: DialogFuncPropsOmitType) {
    return dialogFunc({
        ...props,
        type: "info",
    });
};

Dialog.warning = function successFn(props: DialogFuncPropsOmitType) {
    return dialogFunc({
        ...props,
        type: "warning",
    });
};

Dialog.danger = function errorFn(props: DialogFuncPropsOmitType) {
    return dialogFunc({
        ...props,
        type: "danger",
    });
};

// Dialog.success = function warnFn(props: DialogFuncPropsOmitType) {
//     return dialogFunc({
//         ...props,
//         type: "success",
//     });
// };

export default Dialog;
