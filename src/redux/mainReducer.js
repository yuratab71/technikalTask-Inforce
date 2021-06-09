import API from "../api/api";

const SET_GOODS = "SET_GOODS";

let initialState = {
    goods: [],
}

const mainReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case SET_GOODS:
            return {
                ...state,
                goods: action.data
            }
        default:
            return state;
    }
}

export default mainReducer;

const setGoodsAC = (data) => {
    return {
        type: SET_GOODS,
        data
    }
}

export const setGoods = () => {
    return (dispatch) => {
        API.getData().then(data => {
            dispatch(setGoodsAC(data));
        });
    }
}

export const addItem = (body) => {
    console.log(body);
    return (dispatch) => {
        API.addItem(body).then(
            data => {
                dispatch(setGoodsAC(data));
            }
        )   
    }
}

export const deleteItem = (id) => {
    return (dispatch) => {
        API.deleteItem(id).then(
            data => {
                dispatch(setGoodsAC(data));
            }
        )
    }
}