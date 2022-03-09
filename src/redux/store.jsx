import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/appReducer';


const rootReducer = combineReducers({
  appReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store