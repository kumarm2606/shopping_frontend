import { combineReducers } from "redux";
import { productReducer,selectproductReducer } from "./productReducer";
export const reducers =combineReducers({
    allProducts:productReducer,
    product:selectproductReducer
})
