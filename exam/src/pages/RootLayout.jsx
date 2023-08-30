import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default RootLayout;
