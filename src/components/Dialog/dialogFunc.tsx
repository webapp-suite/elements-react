export interface DialogFuncProps {
    text: string;
    icon?: string;
    type?: "confirm" | "warning" | "danger";
    translations?: {
        acceptbutton: string;
        cancelbutton: string;
    };
    focused?: string;
    primary?: string;
    onAccept?: (event: CustomEvent) => void;
    onCancel?: (event: CustomEvent) => void;
}

export type DialogFunc = (props: DialogFuncProps) => void;

export type DialogStaticFunctions = Record<NonNullable<DialogFuncProps["type"]>, DialogFunc>;

