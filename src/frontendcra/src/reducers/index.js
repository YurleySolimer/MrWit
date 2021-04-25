import { combineReducers } from 'redux';
import statusReducers from './statusReducers';
import mrwitReducers from './mrwitReducers';

const reducer = combineReducers({
  statusReducers,
  mrwitReducers,
});

export default reducer;