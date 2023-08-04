import { Footer, Navbar } from "../ui";

export const ShopLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        // className="surface-ground pb-6"
        // className="pb-6"
        style={{ minHeight: "calc(100vh - 348.188px)" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
