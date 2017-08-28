import WalkComposite from '../Helper/WalkComposite';

const Equality = compositeStructure => (prev, next) => {
    if (prev === next) {
        return true;
    }
    let result = true;
    WalkComposite()((composite, prev, next) => {
        const equal = composite.equality(prev, next);
        result = result && equal;
        return equal;
    })(compositeStructure, prev, next);
    return result;
};
export default Equality;
