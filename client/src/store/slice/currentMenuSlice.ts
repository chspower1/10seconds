import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export enum Menu {
  HOME = "home",
  CHALLENGE = "challenge",
  RANKING = "ranking",
  EVENT = "event",
}

interface CurrentMenuState {
  value: Menu;
}

const initialState: CurrentMenuState = {
  value: Menu.HOME,
};

export const currentMenuSlice = createSlice({
  name: "currentMenu",
  initialState,
  reducers: {
    setCurrentMenu: (state, action: PayloadAction<Menu>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentMenu } = currentMenuSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentMenu = (state: RootState) => state.currentMenu.value;

export const currentMenuReducer = currentMenuSlice.reducer;
