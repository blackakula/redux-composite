export const Expand = action => {
    if (typeof action !== 'object' || action === null || typeof action.type !== 'string') {
        return action;
    }
    try {
        let compositeChecked = undefined, composite = undefined;
        const actions = action.type.split('\n').map(a => {
            const [type, ...path] = a.split('\\');
            if (type === undefined) {
                throw {
                    message: 'action.type is undefined - use format "ACTION_TYPE\\{key1}\\[key2]\\{key3}"',
                    type
                };
            }
            if (path.length === 0) {
                throw {
                    message: 'path for composite is not defined - use format "ACTION_TYPE\\{key1}\\[key2]\\{key3}"',
                    type: a
                }
            }
            let result = {
                type,
                ...((p => typeof action.payload === 'object' && action.payload !== null && typeof action.payload[p] === 'object' && action.payload[p] !== null ? action.payload[p] : {})(path.join('\\')))
            };
            let lastChecked = true;
            path.reverse().map(item => {
                let checked = /^\{.*\}$/.test(item) ? true : (/^\[.*\]$/.test(item) ? false : undefined );
                if (checked === undefined) {
                    throw {
                        message: 'path item is not in the right format: should be either {key} or [key]',
                        item
                    }
                }
                lastChecked = checked;
                checked = checked ? {} : [];
                checked[item.substr(1, item.length - 2)] = result;
                result = checked;
            })
            if (compositeChecked === undefined) {
                compositeChecked = lastChecked;
                composite = compositeChecked ? {} : [];
            } else if (compositeChecked !== lastChecked) {
                throw {
                    message: 'inconsistency in action paths: [] !== {}'
                }
            }
            composite = compositeChecked ? {...composite, ...result} : [...composite, ...result];
        })
        return {type: 'COMPOSITE', composite};
    } catch (e) {
        // console.warn('Action could not be expanded', e, action);
        return action;
    }
}

export default Expand;
