import CompositeClass from './Composite';
import Structure from './Structure';
import Redux from './Redux';

import Reducer from './Composite/Reducer';
import Middleware from './Composite/Middleware';
import Equality from './Composite/Equality';
import Subscribe from './Composite/Subscribe';
import Memoize from './Composite/Memoize';

export const Defaults = {Reducer, Middleware, Equality, Subscribe, Memoize};
export const Composite = parameters => new CompositeClass(parameters);
export * from './Structure';
export * from './Redux';

export default {Composite, Structure, Redux, Defaults};
