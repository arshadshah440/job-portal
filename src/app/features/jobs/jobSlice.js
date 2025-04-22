import { createSlice } from "@reduxjs/toolkit";
import JobsList from './jobs.json';
const initialState = {
   JobsList: JobsList,
   CurrentJob: {}
}

export const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{
          addJob: (state,action) => {
            state.JobsList.push(action.payload);
          },
          filterJob: (state,action) => {
            const jobId = action.payload;
            const jobList = state.JobsList;
            const job = jobList.find((JobsList) => JobsList.id === jobId);
            state.CurrentJob=job;
          }
    }
});

export const { addJob,filterJob } = jobSlice.actions;


export default jobSlice.reducer;