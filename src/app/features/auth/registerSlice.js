import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  userId: null,
  token: null,
  error: null,
};

export const register = createAsyncThunk(
  "register/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(
        "https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/register",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer abc_125!dcdfvvfdvxssabbb_dcdsv",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Throw an error to go into the rejected state
        throw new Error(data.message || "Registration failed");
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

export const Status = (state) => state.register.status;
export const UserId = (state) => state.register.userId;
export const AccessToken = (state) => state.register.Token;
export const Error = (state) => state.register.error;
export default registerSlice.reducer;