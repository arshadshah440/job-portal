import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
          credentials: "include", // Add this to handle cookies
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Throw an error to go into the rejected state
        throw new Error(data.message || "Registration failed");
      }
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const validateAuth = createAsyncThunk(
  "validateAuth/validateAuth",
  async () => {
    try {
      const response = await fetch(
        "https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/validate",
        {
          method: "GET",
          credentials: "include", // Important: send cookies
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return error.message;
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk("register/logout", async () => {
  try {
    const response = await fetch(
      "https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/logout",
      {
        method: "POST",
        credentials: "include", // Important: send cookies
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
    console.log(error);
  }
});

export const login = createAsyncThunk(
  "register/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(
        "https://saddlebrown-sardine-735083.hostingersite.com/wp-json/jobportalapi/v1/login",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer abc_125!dcdfvvfdvxssabbb_dcdsv",
            "Content-Type": "application/json",
          },
          credentials: "include", // Add this to handle cookies
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Throw an error to go into the rejected state
        throw new Error(data.message || "Login failed");
      }
      console.log(data);
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
        // localStorage.setItem("user_id", action.payload.user_id);
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(validateAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(validateAuth.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.userId = action.payload?.user_id ? action.payload.user_id : null;
        // localStorage.setItem("user_id", action.payload.user_id);
        state.token = action.payload?.token ? action.payload.token : null;
      })
      .addCase(validateAuth.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userId = action.payload.user_id;
        // localStorage.setItem("user_id", action.payload.user_id);
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userId = null;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const Status = (state) => state.register.status;
export const UserId = (state) => state.register.userId;
export const AccessToken = (state) => state.register.token;
export const Error = (state) => state.register.error;
export default registerSlice.reducer;
