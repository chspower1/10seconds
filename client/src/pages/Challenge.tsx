import { useState, useEffect } from "react";
import {
  incrementByAmount,
  reset,
  selectCount,
  startAndStopCount,
} from "../store/slice/countSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { openRetry } from "../store/slice/modalSlice";
import RetryModal from "../components/modal/RetryModal";

const Challenge = () => {
  const { value, isStart } = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isStart) {
      dispatch(reset());
      const timer = setInterval(() => {
        dispatch(incrementByAmount(0.01));
      }, 10);
      return () => {
        dispatch(openRetry());
        clearInterval(timer);
      };
    }
  }, [isStart]);
  return (
    <>
      <div>{value.toFixed(2)}</div>
      <button onClick={() => dispatch(startAndStopCount())}>{isStart ? "정지" : "시작"}</button>
    </>
  );
};

export default Challenge;
