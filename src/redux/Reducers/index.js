import { combineReducers } from 'redux';
import reducerTask from './reducerTask'


const rootReducer = combineReducers({reducerTask:reducerTask});

export default rootReducer