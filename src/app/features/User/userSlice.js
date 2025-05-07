import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userLists: [],
  status: "idle",
  error: null,
  currentUser: {},
};

export const fetchcurrentuser = createAsyncThunk(
  "user/fetchcurrentuser",
  async () => {
    try {
      const response = await fetch(
        "https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/get-user",
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: "Bearer abc_125!dcdfvvfdvxssabbb_dcdsv",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch {
      return error.message;
    }
  }
);

const userSlice =createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcurrentuser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchcurrentuser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(fetchcurrentuser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
})

export const userlists =(state) => state.user.userLists;
export const currentstatus = (state) => state.user.status;
export const error = (state) => state.user.error;
export const currentuser = (state) => state.user.currentUser;

export default userSlice.reducer