import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerState from "./reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
	reducerState: reducerState
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;