import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  userId: null,
  token: null,
  error: null,
};

const register = createAsyncThunk("register/register", async (credentials) => {
  try {
    const response = await fetch(
      "https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/register",
      {
        method: "POST",
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
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userId = action.payload.user_id;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
