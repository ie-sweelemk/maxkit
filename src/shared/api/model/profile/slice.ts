import { getProfile } from "shared/api/model/profile";
import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "shared/types";

const initialState: UserProfile = {
  id: "",
  name: "",
  picture: "",
  country: "",
  city: "",
  province: "",
  bio: "",
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (_, action) => {
      return action.payload
    });
  },
});

export const { reducer: profileReducer, actions: profileActions } = slice;
