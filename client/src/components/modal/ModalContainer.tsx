interface ModalContainerProps {
  children: React.ReactNode;
}
const ModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <div className="w-96 h-60 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex justify-center items-center flex-col">
      {children}
    </div>
  );
};

export default ModalContainer;
