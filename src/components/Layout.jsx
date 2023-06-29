import { Footer } from "./Footer";
import { Navbar as Navbarr } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbarr />
      <div
      // className="surface-ground"
      // style={{ minHeight: "calc(100vh - 173.66px)" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
