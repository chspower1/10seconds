const Overlay = ({ onClick }: React.ButtonHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="w-screen h-screen bg-black opacity-20 z-20 absolute top-0 left-0 cursor-pointer"
      onClick={onClick}
    />
  );
};
export default Overlay;
