import { combineReducers } from 'redux';

import globalReducer from './modules/global/globalReducer';
import homeReducer from './modules/home/homeReducer';
const reducers = combineReducers({ globalReducer, homeReducer });

export default reducers;
