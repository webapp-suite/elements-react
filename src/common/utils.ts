// @ts-ignore
import { constants } from "@webapp-suite/elements";

export const isObject = (obj: any) => obj === Object(obj);
export const isPlainObject = (val: any) => !!val && typeof val === "object" && val.constructor === Object;

export const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const camelToKebabCase = (s: string) => s.replace(/([A-Z])/g, (a, b: string) => `-${b.toLowerCase()}`);
export const camelToSnakeCase = (s: string) => s.replace(/([A-Z])/g, (a, b: string) => `_${b.toLowerCase()}`);
export const kebabToCamelCase = (s: string) => s.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

// @ts-ignore FIXME: convertFunc
export const convertObjectKey = (obj: any, convertFunc: (s: string) => string) => {
    if (Array.isArray(obj)) {
        return obj.map((v) => convertObjectKey(v, convertFunc));
    }
    if (!isPlainObject(obj)) {
        return obj;
    }
    return Object.keys(obj).reduce((acc, key) => {
        if (!key) {
            return acc;
        }
        const value = obj[key];
        return {
            ...acc,
            [convertFunc(key)]: convertObjectKey(value, convertFunc),
        };
    }, {});
};

export const convertToWebComponentProp = (name: any) => {
    if (isPlainObject(name)) {
        return Object.keys(name).map((key) => name[key])[0];
    }
    return camelToKebabCase(name);
};

const { colors, colorModifiers } = constants;

export const types = {
    DEFAULT: "default",
    INVERTED: "inverted",
    PRIMARY: "primary",
    DANGER: "danger",
    ERROR: "error",
    SUCCESS: "success",
    ACTIVE: "active",
    INFO: "info",
    FOCUS: "focus",
    WARNING: "warning",
    DISABLED: "disabled",
    DISABLED_CHECKED: "disabled-checked",
    SUGGESTED: "suggested",
    SLATE_LIGHTEST: "slate-lightest",
    GRAY_DARKER: "gray-darker",
    ACTION: "action",
};

export const sizes = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
    EXTRA_LARGE: "extra-large",
};

export const typeColors = {
    [types.DEFAULT]: colors.SLATE,
    [types.INVERTED]: colors.WHITE,
    [types.DANGER]: colors.RED,
    [types.ERROR]: colors.RED,
    [types.SUCCESS]: colors.GREEN,
    [types.PRIMARY]: colors.BLUE,
    [types.ACTIVE]: colors.BLUE,
    [types.INFO]: colors.BLUE,
    [types.FOCUS]: colors.BLUE,
    [types.WARNING]: colors.ORANGE,
    [types.DISABLED]: colors.GRAY + colorModifiers.LIGHTER,
    [types.SUGGESTED]: colors.PURPLE,
    [types.DISABLED_CHECKED]: colors.GRAY + colorModifiers.LIGHT,
    [types.SLATE_LIGHTEST]: colors.SLATE + colorModifiers.LIGHTEST,
    [types.GRAY_DARKER]: colors.GRAY + colorModifiers.DARKER,
    [types.ACTION]: colors.GRAY,
};
