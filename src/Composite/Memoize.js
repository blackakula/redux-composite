import WalkComposite from '../Helper/WalkComposite';
import DefaultMutationMethod from '../Helper/DefaultMutationMethod';

const Memoize = compositeStructure => getState => {
    const memoize = callback => callback;
    const structure = WalkComposite({
        mutationMethod: key => (composite, getState) => [
            DefaultMutationMethod(key)(composite),
            () => getState()[key]
        ]
    })(
        (composite, getState) => composite.memoize(getState)
    )(compositeStructure, getState);
    return {
        memoize,
        structure
    };
};

export default Memoize;
