class Merge {

    static assign(target, ...sources) {
        if (!sources.length) return target;

        const source = sources.shift();

        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    this.assign(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return this.assign(target, ...sources);
    }

    static isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
}

module.exports = Merge;