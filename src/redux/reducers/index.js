import { combineReducers } from "redux";
import { productReducer,selectproductReducer, user } from "./productReducer";
export const reducers =combineReducers({
    allProducts:productReducer,
    product:selectproductReducer,
    user:user
})
