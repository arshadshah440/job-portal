import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import jobReducer from "./features/jobs/jobSlice";
import companyReducer from "./features/company/companySlice";
import registerSlice from "./features/auth/registerSlice";
export const store = configureStore({
    reducer: {
        counter : counterReducer,
        jobs : jobReducer,
        company : companyReducer,
        register : registerSlice
    },
});