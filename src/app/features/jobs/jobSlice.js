import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import JobsList from "./jobs.json";
const initialState = {
  JobsList: [],
  status: "idle",
  error: null,
  totaljobs: 0,
  CurrentJob: {},
  newJobSlug: null,
};

export const fetchjobs = createAsyncThunk("jobs/fetchjobs", async (params = {}) => {
  
  try {
    const query = new URLSearchParams(params).toString();
    const url = `https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/jobs${query ? `?${query}` : ''}`;
    const response = await fetch(url,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer abc_125!dcdfvvfdvxssabbb_dcdsv",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

export const singlejobfetch = createAsyncThunk(
  "jobs/singlejobfetch",
  async (slug) => {
    try {
      const response = await fetch(
        `https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/job?slug=${slug}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer abc_125!dcdfvvfdvxssabbb_dcdsv",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message;
    } 
  }
);

export const createJob=createAsyncThunk("jobs/addJob",async(data)=>{
  try {
    const response = await fetch(
      "https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/job",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer abc_125!dcdfvvfdvxssabbb_dcdsv",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const data1 = await response.json();
    return data1;
  } catch (error) {
    return error.message;
  }
})

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.JobsList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchjobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchjobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.JobsList = action.payload.data;
        state.totaljobs = action.payload.total_jobs;
      })
      .addCase(fetchjobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // handling the single jon
      .addCase(singlejobfetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(singlejobfetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.CurrentJob = action.payload.data;
      })
      .addCase(singlejobfetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // create job
      .addCase(createJob.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newJobSlug = action.payload.slug;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addJob, filterJob } = jobSlice.actions;

export const selectJobsList = (state) => state.jobs.JobsList;
export const errorMessage = (state) => state.jobs.CurrentJob;
export const selectJobStatus = (state) => state.jobs.status;
export const selectedSingleJob = (state) => state.jobs.CurrentJob;
export const newJobslug = (state) => state.jobs.newJobSlug;
export const totalavailablejobs = (state) => state.jobs.totaljobs;

export default jobSlice.reducer;
