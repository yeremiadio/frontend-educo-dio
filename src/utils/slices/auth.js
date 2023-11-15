import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const user = JSON.parse(localStorage.getItem("user"));

export const saveCode = createAsyncThunk(
  "auth/save-compile",
  async ({ code, userInput }, thunkAPI) => {
    try {
      const response = await AuthService.saveCode(code, userInput);
      const message = response.data.message;
      thunkAPI.dispatch(setMessage(message));
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      thunkAPI.dispatch(setMessage(message));
      throw error; // Re-throw the error to be captured by the .rejectWithValue() method
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password, roleId }, thunkAPI) => {
    try {
      const response = await AuthService.register(
        username,
        email,
        password,
        roleId
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getUserByIdAsyncThunk = createAsyncThunk(
  "users/getById",
  async ({ userId }, thunkAPI) => {
    try {
      const response = await UserService.getUserById({ id: userId });
      return { user: response?.data?.user };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [getUserByIdAsyncThunk.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [getUserByIdAsyncThunk.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
