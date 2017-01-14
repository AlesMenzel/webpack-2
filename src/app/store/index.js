import { combineReducers, createStore } from 'redux'
import app from '../reducer/app';

const preloadedState = window.__PRELOADED_STATE__;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(combineReducers({
	app
}), preloadedState, devTools);
