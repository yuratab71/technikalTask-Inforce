import API from "../api/api";

const SET_ITEM = "SET_ITEM";

let initialState = {
    item: {
    _id: null,
    name: null,
    imageUrl: null,
    count: null,
    weight: null,
    size: {
        width: null,
        height: null,
    },
    comments: []
}
}

const detailsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ITEM:
            return {
                ...state,
                item: action.data
            }
        default:
            return state;
    }
}

export default detailsReducer;

const setItemAC = (data) => {
    return {
        type: SET_ITEM,
        data
    }
}

export const setItem = (id) => {
    return (dispatch) => {
        API.getItem(id).then(data => {
            console.log(data);
            dispatch(setItemAC(data));
        });
    }
}

export const updateItem = (id, body) => {
    return (dispatch) => {
        API.updateItem(id, body).then(data => {
            dispatch(setItemAC(data));
        })
    }
}

