import { Footer, Navbar } from "../ui";

export const ShopLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div style={{ minHeight: "calc(100vh - 348.188px)" }}>{children}</div>
      <Footer />
    </>
  );
};
