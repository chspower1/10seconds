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
  const { targetValue, currentValue, isStart } = useAppSelector(selectCount);
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
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-white text-[150px] font-black">
        {currentValue.toFixed(2)}
      </div>
      <div className="text-center text-white text-[150px] font-black">{targetValue}</div>
      <button
        className="w-[200px] h-20 bg-rose-700 rounded"
        onClick={() => dispatch(startAndStopCount())}
      >
        <span className="text-center text-white text-[50px] font-black">
          {isStart ? "정지" : "시작"}
        </span>
      </button>
    </div>
  );
};

export default Challenge;
