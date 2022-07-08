
import { ADD_DATA, ADD_SEARCH_DATA, DETAILS_OPEN, DETAILS } from "./action";

const initState = {

    allData : [],
    open : false,
    details : "",
}


export const userCardsReducer = (store = initState, action) => {
    switch(action.type) {
        case ADD_DATA : return {
            ...store,

            allData : [...store.allData, ...action.payload],
        }
        case ADD_SEARCH_DATA : return {
            ...store,
            allData : action.payload,
        }
        case DETAILS_OPEN : return {
            ...store,
            open : action.payload,
        }
        case DETAILS : return {
            ...store,
            details : action.payload,
        }
        default : return store;
    }
}