import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex-1 ">
        <Navbar />
        <div>{children}</div>
      </div>
      <div className="mb-4">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
