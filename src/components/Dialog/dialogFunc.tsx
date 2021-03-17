export interface DialogFuncProps {
    text: string;
    icon?: string;
    type?: "info" | "warning" | "danger";
    translations?: {
        acceptButton?: string;
        cancelButton?: string;
    };
    focused?: string;
    primary?: string;
    onAccept?: (event: CustomEvent) => void;
    onCancel?: (event: CustomEvent) => void;
}

export type DialogFunc = (props: DialogFuncProps) => void;

export type DialogStaticFunctions = Record<NonNullable<DialogFuncProps["type"]>, DialogFunc>;

