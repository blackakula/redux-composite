import WalkComposite from '../Helper/WalkComposite';
import {InitAction, MutateMethod} from '../Helper/ReduxAction';
import DefaultMutationMethod from '../Helper/DefaultMutationMethod';
import {Defaults} from 'walk-composite';

const InitWalk = (parameters = {}) => WalkComposite({
    mutationMethod: key => (composite, dispatch, getState, ...other) => [
        DefaultMutationMethod(key)(composite),
        MutateMethod(dispatch, key),
        () => getState()[key],
        ...Defaults.MutationMethod(key)(...other)
    ],
    walkMethod: InitWalk,
    ...parameters
});

export default InitWalk;
