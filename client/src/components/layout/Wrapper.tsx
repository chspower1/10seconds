interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-screen h-screen bg-zinc-900">
      {/* <div className="w-[500px] h-[500px] bg-orange-950 rounded-full blur-[200px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
      <div className="">{children}</div>
    </div>
  );
};
export default Wrapper;
