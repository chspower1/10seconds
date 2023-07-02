import { createPortal } from "react-dom";
import Overlay from "../layout/Overlay";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  return createPortal(
    <>
      {children}
      <Overlay />
    </>,
    document.getElementById("modal-root")!
  );
};
export default ModalPortal;
