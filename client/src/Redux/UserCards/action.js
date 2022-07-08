
export const ADD_DATA = "ADD_DATA";

export const ADD_SEARCH_DATA = "ADD_SEARCH_DATA";
export const DETAILS_OPEN = "DETAILS_OPEN";
export const DETAILS = "DETAILS";

export const addData = (data) => {
    return {
        type : ADD_DATA,
        payload : data
    }
}


export const addSearchData = (data) => {
    return {
        type : ADD_SEARCH_DATA,
        payload : data
    }
}



export const addDetailsOpen = (data) => {
    return {
        type : DETAILS_OPEN,
        payload : data
    }
}

export const addDetails = (data) => {
    return {
        type : DETAILS,
        payload : data
    }
}