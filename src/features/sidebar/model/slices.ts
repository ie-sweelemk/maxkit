import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SidebarInitialState } from "./types";

const initialState: SidebarInitialState = {
  isOpen: false,
}

const slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarState: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    }
  }
});

export const { reducer: sidebarReducer, actions: sidebarActions } = slice;