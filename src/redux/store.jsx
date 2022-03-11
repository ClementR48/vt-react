import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/appReducer';
import eventReducer from './reducers/eventReducer';


const rootReducer = combineReducers({
  appReducer,
  eventReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store