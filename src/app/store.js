import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import photosReducer from "../features/UsersPhoto/photosSlice";

const store=configureStore({
    reducer:{
        counter: counterReducer,
        photos: photosReducer
    }
});

export default store;