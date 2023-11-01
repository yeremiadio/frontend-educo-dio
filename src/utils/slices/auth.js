import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service";

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
          (error.response?.data?.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        throw error; // Re-throw the error to be captured by the .rejectWithValue() method
      }
    }
  );
  

export const register = createAsyncThunk(
    "auth/register",
    async ({ username, email, password, roleId }, thunkAPI) => {
        try {
        const response = await AuthService.register(username, email, password, roleId);
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
    async ({ username, password }, thunkAPI) => {
        try {
        const data = await AuthService.login(username, password);
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
        [register.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
        state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        },
    },
});

const { reducer } = authSlice;
export default reducer;