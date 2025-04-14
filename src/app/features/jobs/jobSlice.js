import { createSlice } from "@reduxjs/toolkit";
import JobsList from './jobs.json';
const initialState = {
   JobsList: JobsList,
}

export const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{

    }
});

export default jobSlice.reducer;