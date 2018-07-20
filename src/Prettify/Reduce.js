import {Walk, Defaults} from 'walk-composite';

export const Reduce = action => {
    let actions = [];
    let payload = undefined;
    if (typeof action !== 'object' || action === null || action.type !== 'COMPOSITE' || typeof action.composite !== 'object') {
        return action;
    }
    Walk({
        keysMethod: (action, path) => {
            const { type, ...rest } = action;
            if (type !== undefined) {
                actions.push(type + '\\' + path);
                if (Object.keys(rest).length !== 0) {
                    if (payload === undefined) {
                        payload = {};
                    }
                    payload[path] = rest;
                }
            }
            return Defaults.KeysMethod(rest);
        },
        mutationMethod: key => (action, path) => [
            Defaults.MutationMethod(key)(action)[0],
            (key => path === '' ? key : path + '\\' + key)(Array.isArray(action) ? `[${key}]` : `{${key}}`)
        ]
    })(() => {})(action.composite, '')
    return {type: actions.join('\n'), payload};
}

export default Reduce;
