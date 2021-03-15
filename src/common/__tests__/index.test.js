// TODO:

const isPlainObject = (val) => !!val && typeof val === "object" && val.constructor === Object;

const camelToSnakeCase = (s) => s.replace(/([A-Z])/g, (a, b) => `_${b.toLowerCase()}`);

const convertObjectKey = (obj, convertFunc) => {
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

console.log(convertObjectKey({ trans: { aaButton: { frUid: ["dd"] }, bbButton: "ff" } }, camelToSnakeCase));
console.log(convertObjectKey([1, 2, { trans: { aaButton: { frUid: ["dd"] }, bbButton: "ff" } }], camelToSnakeCase));
console.log(convertObjectKey([], camelToSnakeCase));
console.log(convertObjectKey({}, camelToSnakeCase));
