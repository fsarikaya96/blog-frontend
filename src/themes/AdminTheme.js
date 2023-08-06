import React from "react";
import Header from "../compenents/layout/Admin/Header";
import Footer from "../compenents/layout/Admin/Footer";

const AdminTheme = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AdminTheme;