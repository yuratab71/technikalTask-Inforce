import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import detailsReducer from "./detailsReducer";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    main: mainReducer,
    details: detailsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;