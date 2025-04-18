import { createSlice } from "@reduxjs/toolkit";
import JobsList from './jobs.json';
const initialState = {
   JobsList: JobsList,
}

export const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{
          addJob: (state,action) => {
            state.JobsList.push(action.payload);
          }
    }
});

export const { addJob } = jobSlice.actions;


export default jobSlice.reducer;