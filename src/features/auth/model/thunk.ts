import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signUp } from "../api";

export const authLogin = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    try {
      const {
        data: { user },
        error,
      } = await signIn(credentials);

      if (error) {
        throw new Error(error.message);
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const authRegister = createAsyncThunk(
  "auth/register",
  async (credentials: { email: string; password: string }) => {
    try {
      const {
        data: { user },
        error,
      } = await signUp(credentials);

      if (error) {
        throw new Error(error.message);
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);
