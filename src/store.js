import { createStore, combineReducers } from 'redux';

import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers));

export default store;