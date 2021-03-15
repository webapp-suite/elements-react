import React, {
    Children,
    cloneElement,
    ComponentType,
    forwardRef,
    ForwardRefRenderFunction,
    ReactElement,
    Ref,
    RefObject,
    useEffect,
    useRef,
} from "react";

import { CommonProps } from "../interfaces/CommonProps";
import { DomRef } from "../interfaces/DomRef";
import { getEffectiveScopingSuffixForTag } from "./CustomElementsScope";
import { useConsolidatedRef } from "./useConsolidatedRef";
import {
    isObject,
    capitalizeFirstLetter,
    camelToKebabCase,
    camelToSnakeCase,
    kebabToCamelCase,
    convertObjectKey,
} from "./utils";

const createEventPropName = (eventName: string) => `on${capitalizeFirstLetter(kebabToCamelCase(eventName))}`;

type EventHandler = (event: CustomEvent<unknown>) => void;

export interface WebComponentPropTypes extends CommonProps {
    ref?: Ref<any>;
    children?: any | void;
}

export const convertToWebComponent = <T extends Record<string, any>>(
    tagName: string,
    regularProperties: string[],
    booleanProperties: string[],
    slotProperties: string[],
    eventProperties: string[]
) => {
    // @ts-ignore
    const WithWebComponent = forwardRef((props: T & WebComponentPropTypes, wcRef: RefObject<DomRef>) => {
        const { className, tooltip, children, ...rest } = props;

        const ref = useConsolidatedRef<HTMLElement>(wcRef);
        const eventRegistry = useRef<Record<string, EventHandler>>({});

        // regular props (no booleans, no slots and no events)
        const regularProps = regularProperties.reduce((acc, name) => {
            if (rest.hasOwnProperty(name)) {
                // one (rather ugly) way to pass an object is to convert it into a string, using JSON.stringify
                return {
                    ...acc,
                    [camelToKebabCase(name)]: isObject(rest[name])
                        ? JSON.stringify(convertObjectKey(rest[name], camelToSnakeCase))
                        : rest[name],
                };
            }
            return acc;
        }, {});

        // boolean properties - only attach if they are truthy
        const booleanProps = booleanProperties.reduce((acc, name) => {
            if (rest[name] === true || rest[name] === "true") {
                return { ...acc, [camelToKebabCase(name)]: true };
            }
            return acc;
        }, {});

        const slots = slotProperties.reduce((acc: any[], name) => {
            const slotValue = rest[name] as ReactElement;

            if (!slotValue) return acc;

            const slottedChildren: any[] = [];
            let index = 0;
            const removeFragments = (element: any) => {
                if (!element) return;
                if (element.type === React.Fragment) {
                    Children.toArray(element.props?.children)
                        .filter(Boolean)
                        .forEach((item) => {
                            removeFragments(item);
                        });
                } else {
                    slottedChildren.push(
                        cloneElement(element, {
                            key: `${name}-${index}`,
                            slot: name,
                        })
                    );
                    index++;
                }
            };

            if (Array.isArray(slotValue)) {
                slotValue.forEach((item) => {
                    removeFragments(item);
                });
            } else {
                removeFragments(slotValue);
            }
            return [...acc, ...slottedChildren];
        }, []);
        // event binding
        useEffect(
            () => {
                eventProperties.forEach((eventName) => {
                    const eventHandler = rest[createEventPropName(eventName)] as EventHandler;
                    if (typeof eventHandler === "function") {
                        eventRegistry.current[eventName] = eventHandler;
                        // @ts-ignore
                        ref.current.addEventListener(eventName, eventRegistry.current[eventName]);
                    }
                });

                return () => {
                    // eslint-disable-next-line guard-for-in
                    for (const eventName in eventRegistry.current) {
                        // @ts-ignore
                        ref.current?.removeEventListener(eventName, eventRegistry.current[eventName]);
                    }
                };
            },
            eventProperties.map((eventName) => rest[createEventPropName(eventName)])
        );

        // non web component related props, just pass them
        const nonWebComponentRelatedProps = Object.entries(rest)
            .filter(([key]) => !regularProperties.includes(key))
            .filter(([key]) => !slotProperties.includes(key))
            .filter(([key]) => !booleanProperties.includes(key))
            .filter(([key]) => !eventProperties.map((eventName) => createEventPropName(eventName)).includes(key))
            .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});

        const tagNameSuffix: string = getEffectiveScopingSuffixForTag(tagName);
        const Component = ((tagNameSuffix ? `${tagName}-${tagNameSuffix}` : tagName) as unknown) as ComponentType<
            WebComponentPropTypes & { class: string | undefined }
        >;

        return (
            <Component
                ref={ref}
                {...booleanProps}
                {...regularProps}
                {...nonWebComponentRelatedProps}
                class={className}
                title={tooltip}
            >
                {slots}
                {children}
            </Component>
        );
    });

    WithWebComponent.displayName = `WithWebComponent(${tagName})`;

    return (WithWebComponent as unknown) as ForwardRefRenderFunction<DomRef, T & WebComponentPropTypes>;
};
