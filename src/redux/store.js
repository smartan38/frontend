import {configureStore, } from "@reduxjs/toolkit"
import { authReducer } from "./reducers/userReducer.js";
import { cartReducer } from "./reducers/cartReducer.js";
import {  orderReducer ,ordersReducer} from "./reducers/orderReducer.js";
import { adminReducer } from "./reducers/adminReducer.js";
const store= configureStore({
  reducer :{
    auth:authReducer,
    carts : cartReducer,
    order : orderReducer,
    orders :ordersReducer,
    admin :adminReducer,
  },
  
})

export default store;

export const server ="https://sauravproject.onrender.com/api/v1"   //BACKEND add