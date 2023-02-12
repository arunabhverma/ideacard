import {combineReducers} from 'redux';
import authReducer from '@redux/auth/slice';

const appReducer = combineReducers({
    authReducer
});

export default appReducer;
