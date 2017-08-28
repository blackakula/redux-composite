import TestReducer from './Test/Reducer';
import TestMiddleware from './Test/Middleware';
import TestEquality from './Test/Equality';
import TestSubscribe from './Test/Subscribe';

const tests = () => {
    TestReducer();
    TestMiddleware();
    TestEquality();
    TestSubscribe();
};
export default tests;
