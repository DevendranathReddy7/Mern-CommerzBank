import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import Sidebar from "../../../common/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const SettingsHomePage = (props) => {
  return (
    <div>
      <Navbar title="Settings" />
      <Sidebar to="Settings" />
      <Outlet />
      <Footer />
    </div>
  );
};
export default SettingsHomePage;
