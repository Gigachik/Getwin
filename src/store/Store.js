import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

// import logger from "redux-logger";
import homeReducer from "components/home/store/reducer";
import profileReducer from "components/profile/store/reducer";

let reducers = combineReducers({
  home: homeReducer,
  profile: profileReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

export default store;
