import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "shared/types";
import { authLogin, authRegister } from './thunk';
import { InitialState } from "./types";

const initialState: InitialState = {
  isAuthenticated: false,
  user: null,
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = {
          id: action.payload?.id!,
          email: action.payload?.email!,
        }
        state.isAuthenticated = true;
      })
      .addCase(authLogin.rejected, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.user = {
          id: action.payload?.id!,
          email: action.payload?.email!,
        }
        state.isAuthenticated = true;
      })
      .addCase(authRegister.rejected, (state) => {
        state.isAuthenticated = false;
      })
  }
});

export const { reducer: authReducer, actions: authActions } = slice;