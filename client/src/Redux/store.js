
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { userCardsReducer } from "./UserCards/reducer";

const rootReducer = combineReducers({
    allData : userCardsReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
)

store.subscribe(() => {
    console.log("subscribe :", store.getState());
})