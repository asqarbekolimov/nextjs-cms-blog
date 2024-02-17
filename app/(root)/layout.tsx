import { ChildProps } from "@/types";
import React from "react";
import Footer from "./_componets/footer";
import Navbar from "./_componets/navbar";

const Layout = ({ children }: ChildProps) => {
  return (
    <main>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
