import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CountState {
  min: number;
  max: number;
  currentValue: number;
  targetValue: number;
  isStart: boolean;
}

const initialState: CountState = {
  min: 3,
  max: 6,
  currentValue: 0,
  targetValue: 10,
  isStart: false,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.currentValue += 1;
    },
    decrement: (state) => {
      state.currentValue -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.currentValue += action.payload;
    },
    reset: (state) => {
      state.currentValue = 0;
    },
    startAndStopCount: (state) => {
      if (!state.isStart)
        state.targetValue = +(Math.random() * (state.max - state.min + 1) + state.min).toFixed(2);
      state.isStart = !state.isStart;
    },
  },
});

export const { increment, decrement, incrementByAmount, startAndStopCount, reset } =
  countSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.count;

export const countReducer = countSlice.reducer;
