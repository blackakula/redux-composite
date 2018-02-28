import TestReducer from './Test/Reducer';
import TestMiddleware from './Test/Middleware';
import TestEquality from './Test/Equality';
import TestSubscribe from './Test/Subscribe';
import TestRedux from './Test/Redux';
import TestMemoize from './Test/Memoize';
import TestReduxThunk from './Test/ReduxThunk';

const tests = () => {
    TestReducer();
    TestMiddleware();
    TestEquality();
    TestSubscribe();
    TestRedux();
    TestMemoize();
    TestReduxThunk();
};
tests();
