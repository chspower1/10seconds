import { createPortal } from "react-dom";
import Overlay from "../layout/Overlay";
import RetryModal from "./RetryModal";
import ModalContainer from "./ModalContainer";

const ModalPortal = () => {
  const Modal = <>{<RetryModal />}</>;
  return createPortal(Modal, document.getElementById("modal-root")!);
};
export default ModalPortal;
