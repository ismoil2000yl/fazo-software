import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const index = () => {



  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default index;
