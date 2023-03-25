import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Reducer/cartSlice";
import favoriteSlice from "./Reducer/favoriteSlice";
import genreSlice from "./Reducer/genreSlice";
import productsSlice from "./Reducer/productsSlice";
import { UserReducer } from "./Reducer/UserReducer";

const store = configureStore({
    reducer: {
        cart : cartSlice,
        user: UserReducer,
        products: productsSlice,
        genre: genreSlice,
        favories : favoriteSlice
    }
})


export default store;