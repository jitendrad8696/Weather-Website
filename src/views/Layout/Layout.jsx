import React from "react";
import { Header } from "../";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="font-bold font-sans">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
