const memoizeToggle = memoize => {
    let state = false;
    return memoize(() => {
        state = !state;
        return state;
    });
};

export const MemoizeChain = (...memoizeChain) => {
    const memoizeToggleChain = memoizeChain.map(memoize => memoizeToggle(memoize));
    return callback => {
        let state = undefined,
            result = undefined;
        return (...parameters) => {
            const next = memoizeToggleChain.map(memoizeToggleItem => memoizeToggleItem() ? '1' : '0').join('');
            if (next !== state) {
                state = next;
                result = callback(...parameters);
            }
            return result;
        };
    };
};

export default MemoizeChain;
