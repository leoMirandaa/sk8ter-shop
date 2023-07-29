import { Footer } from "./Footer";
import { Navbar as Navbarr } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbarr />
      <div
        // className="surface-ground pb-6"
        className="pb-6"
        style={{ minHeight: "calc(100vh - 315.188px)" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
