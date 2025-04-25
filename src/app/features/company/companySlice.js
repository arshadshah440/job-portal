import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  companyLists: [],
  currentCompany: {},
  status: "idle",
  error: null,
};
export const fetchcompany = createAsyncThunk(
  "company/fetchcompany",
  async () => {
    try {
      const response = await fetch(
        "https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/companies",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer abc_125!dcdfvvfdvxssabbb_dcdsv",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch {
      return error.message;
    }
  }
);
export const singlecompanyfetch = createAsyncThunk(
  "company/singlecompanyfetch",
  async (slug) => {
    try {
      const response = await fetch(
        `https://saddlebrown-sardine-735083.hostingersite.com//wp-json/jobportalapi/v1/company?slug=${slug}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer abc_125!dcdfvvfdvxssabbb_dcdsv",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch {
      return error.message;
    }
  }
)
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.companyLists.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchcompany.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchcompany.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companyLists = action.payload;
      })
      .addCase(fetchcompany.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(singlecompanyfetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(singlecompanyfetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentCompany = action.payload;
      })
      .addCase(singlecompanyfetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectCompanyStatus = (state) => state.company.status;

export const selectCompanyList = (state) => state.company.companyLists;

export const selectCompanyError = (state) => state.company.error;

export const selectedSingleCompany = (state) => state.company.currentCompany;

export const { addCompany } = companySlice.actions;

export default companySlice.reducer;
