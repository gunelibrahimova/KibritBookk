import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Reducer/cartSlice";
import { UserReducer } from "./Reducer/UserReducer";

const store = configureStore({
    reducer: {
        cart : cartSlice,
        user: UserReducer,
    }
})


export default store;