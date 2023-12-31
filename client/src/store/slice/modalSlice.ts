import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ModalState {
  openRetryModal: boolean;
}

const initialState: ModalState = {
  openRetryModal: false,
};

export const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    openRetry: (state) => {
      state.openRetryModal = true;
    },
    closeRetry: (state) => {
      state.openRetryModal = false;
    },
  },
});

export const { openRetry, closeRetry } = modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectmodal = (state: RootState) => state.modal;

export const modalReducer = modalSlice.reducer;
