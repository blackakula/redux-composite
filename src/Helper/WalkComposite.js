import {Walk, Defaults} from 'walk-composite';
import Composite from '../Composite';

const WalkComposite = (parameters = {}, allowFunction = false) => Walk({
    leafCondition: (data) => {
        const isLeaf = Defaults.LeafCondition(data);
        if (!(data instanceof Composite) && isLeaf && (!allowFunction || typeof data !== 'function')) {
            throw {
                message: "Structure leafs could be only instance of Composite or reducer function"
            };
        }
        return isLeaf || data instanceof Composite;
    },
    walkMethod: parameters => WalkComposite(parameters, allowFunction),
    ...parameters
});

export default WalkComposite;
