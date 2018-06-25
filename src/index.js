import CompositeClass, {Wrappers} from './Composite';
import Structure from './Structure';

import Reducer from './Composite/Reducer';
import Middleware from './Composite/Middleware';
import Equality from './Composite/Equality';
import Subscribe from './Composite/Subscribe';
import Redux from './Composite/Redux';
import Memoize from './Composite/Memoize';

export const Defaults = {Reducer, Middleware, Equality, Subscribe, Redux, Memoize};
export const Composite = parameters => new CompositeClass(parameters);
export * from './Structure';

export default {Composite, Structure, Defaults, Wrappers};
