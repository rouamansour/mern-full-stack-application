import { createStore, applyMiddleware } from 'redux';
import reduxthunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';
const initialState = {};
const middleware = [reduxthunk];
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;