import { ActionTypes } from "../contants/action-types"

const initialState ={
    products:[]
}

export const productReducer = (state=initialState,{type,payload})=> {
switch (type){
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
        default:
            return state;
}
}
export const selectproductReducer = (state={},{type,payload})=> {
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
            default:
                return state;
    }
    }
    export const user = (state={},{type,payload})=> {
        switch (type){
            case ActionTypes.USER:
                return {...state,...payload};
                default:
                    return state;
        }
        }