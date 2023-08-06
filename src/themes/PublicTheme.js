import React from "react";
import Header from "../compenents/layout/Public/Header";
import Footer from "../compenents/layout/Public/Footer";

const PublicTheme = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PublicTheme;