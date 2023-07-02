import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CountState {
  value: number;
  isStart: boolean;
}

const initialState: CountState = {
  value: 0,
  isStart: false,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    startAndStopCount: (state) => {
      state.isStart = !state.isStart;
    },
  },
});

export const { increment, decrement, incrementByAmount, startAndStopCount, reset } =
  countSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.count;

export default countSlice.reducer;
