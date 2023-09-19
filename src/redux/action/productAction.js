import { ActionTypes } from "../contants/action-types"
export const setProducts =(products)=>{
    return {
type:ActionTypes.SET_PRODUCTS,
payload:products
    }
}
export const selectedProducts =(products)=>{
    return {
type:ActionTypes.SELECTED_PRODUCT,
payload:products
    }
}
export const LoginUserData =(data)=>{
    return {
type:ActionTypes.USER,
payload:data
    }
}