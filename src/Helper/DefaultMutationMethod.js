import {Defaults} from 'walk-composite';

const DefaultMutationMethod = key => data => Defaults.MutationMethod(key)(data)[0];
export default DefaultMutationMethod;
