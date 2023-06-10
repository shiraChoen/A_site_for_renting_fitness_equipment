import { configureStore } from "@reduxjs/toolkit";
import  Category  from "../features/Category/CategorySlice";
import  Lend  from "../features/Lend/LendSlice";
import  Product  from "../features/Product/ProductSlice";
import  User  from "../features/User/UserSlice";


export const store=configureStore({
    reducer:{Category,Lend,Product,User},
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch