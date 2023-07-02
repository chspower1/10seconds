import { useSelector } from "react-redux";
import { closeRetry, selectmodal } from "../../store/slice/modalSlice";
import Overlay from "../layout/Overlay";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ModalContainer from "./ModalContainer";
import { startAndStopCount } from "../../store/slice/countSlice";

const RetryModal = () => {
  const { openRetryModal } = useSelector(selectmodal);
  const dispatch = useAppDispatch();

  const handleClickRetry = () => {
    dispatch(closeRetry());
    dispatch(startAndStopCount());
  };
  return (
    <>
      {openRetryModal && (
        <>
          <ModalContainer>
            <h3>재도전 하시겠습니까?</h3>
            <div className="flex gap-3 mt-10">
              <button onClick={handleClickRetry}>Yes</button>
              <button onClick={() => dispatch(closeRetry())}>No</button>
            </div>
          </ModalContainer>
          <Overlay onClick={() => dispatch(closeRetry())} />
        </>
      )}
    </>
  );
};
export default RetryModal;
