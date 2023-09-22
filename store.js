import { configureStore } from "@reduxjs/toolkit";
import { storeApi } from "./src/reducers/api";
import listReducer from "./src/reducers/List"



const store = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer, 
        myList: listReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(storeApi.middleware),
});

export default store;
