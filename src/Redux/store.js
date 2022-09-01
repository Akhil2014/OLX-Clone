
import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { homeReducer } from "./HomeReducer/HomeReducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({homeReducer})

const middleware = [thunk];

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

export const store =  legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(...middleware)))