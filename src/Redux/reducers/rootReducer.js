import { combineReducers } from 'redux';

import globalFilterReducer from './globalFilterReducer';
import ticketsReducer from './ticketsReducer';
import showMoreReducer from './showMoreReducer';
import transferFilterReducer from './transferFilterReducer';
import siderFilterReducer from './siderFilterReducer';

const rootReducer = combineReducers({
  siderFilterReducer,
  ticketsReducer,
  globalFilterReducer,
  showMoreReducer,
  transferFilterReducer,
});

export default rootReducer;
