import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import jobReducer from "./features/jobs/jobSlice";
export const store = configureStore({
    reducer: {
        counter : counterReducer,
        jobs : jobReducer
    },
});