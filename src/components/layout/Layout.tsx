import Footer from "./Footer";
import Header from "./Header";
import Overlay from "./Overlay";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>

      <Footer />
    </>
  );
};
export default Layout;
