export const isObject = (obj: any) => obj === Object(obj);
export const isPlainObject = (val: any) => !!val && typeof val === 'object' && val.constructor === Object;

export const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const camelToKebabCase = (s: string) => s.replace(/([A-Z])/g, (a, b: string) => `-${b.toLowerCase()}`);
export const camelToSnakeCase = (s: string) => s.replace(/([A-Z])/g, (a, b: string) => `_${b.toLowerCase()}`);
export const kebabToCamelCase = (s: string) => s.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

// @ts-ignore FIXME: convertFunc
export const convertObjectKey = (obj: any, convertFunc: (s: string) => string) => {
    if (Array.isArray(obj)) {
        return obj.map(v => convertObjectKey(v, convertFunc))
    }
    if (!isPlainObject(obj)) {
        return obj;
    }
    return Object.keys(obj).reduce((acc, key) => {
        if (!key) {
            return acc
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
        return Object.keys(name).map(key => name[key])[0];
    }
    return camelToKebabCase(name);
}
