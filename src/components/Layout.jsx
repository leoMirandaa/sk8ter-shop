import { Footer } from "./Footer";
import { Navbar as Navbarr } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbarr />
      <div
        // className="bg-primary"
        // style={{ background: "#E8DCD2", minHeight: "calc(100vh - 175.5px)" }}
        className="surface-ground p-4"
        style={{ minHeight: "calc(100vh - 175.5px)" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
