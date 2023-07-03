import Footer from "./Footer";
import Header from "./Header";
import Overlay from "./Overlay";
import Wrapper from "./Wrapper";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <div>{children}</div>

      <Footer />
    </Wrapper>
  );
};
export default Layout;
