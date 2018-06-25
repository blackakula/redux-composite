import CompositeClass, {Wrappers} from './Composite';
import Structure from './Structure';
import Redux from './Redux';
import Memoize from './Memoize';

import Reducer from './Composite/Reducer';
import Middleware from './Composite/Middleware';
import Equality from './Composite/Equality';
import Subscribe from './Composite/Subscribe';
import CompositeRedux from './Composite/Redux';
import CompositeMemoize from './Composite/Memoize';

export const Defaults = {Reducer, Middleware, Equality, Subscribe, Redux: CompositeRedux, Memoize: CompositeMemoize};
export const Composite = parameters => new CompositeClass(parameters);
export * from './Structure';
export * from './Redux';
export * from './Memoize';

export default {Composite, Structure, Redux, Memoize, Defaults, Wrappers};
