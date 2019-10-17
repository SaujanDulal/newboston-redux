import { combineReducers } from 'redux';
import userReducer from './reducer-users';
import { activeUserReducer } from './activeReducer';

const allReducers = combineReducers({
	users: userReducer,
	activeUser: activeUserReducer
});

export default allReducers;
