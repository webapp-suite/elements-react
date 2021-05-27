import { Meta } from "@storybook/react";

import Dialog from "../../Dialog";
import Button from "../../Button";

export default {
    title: "Layer/Dialog",
    component: Dialog,
} as Meta;

export const Basic = () => (
    <Button
        onClick={() => {
            Dialog.info({
                text: "This is info hint text !",
            });
        }}
    >
        info
    </Button>
);

export const Type = () => (
    <>
        <Button
            onClick={() => {
                Dialog.info({
                    text: "This is info hint text !",
                });
            }}
        >
            info
        </Button>
        <Button
            onClick={() => {
                Dialog.warning({
                    text: "This is warning hint text !",
                });
            }}
        >
            warning
        </Button>
        <Button
            onClick={() => {
                Dialog.danger({
                    text: "This is danger hint text !",
                });
            }}
        >
            danger
        </Button>
    </>
);
