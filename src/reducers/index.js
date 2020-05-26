import urlReducer from './urlReducer';
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    urlReducer: urlReducer
});

export default allReducer;