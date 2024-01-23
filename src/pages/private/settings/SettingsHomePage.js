import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import Sidebar from "../../../common/Sidebar/Sidebar";

const SettingsHomePage = (props) => {
  return (
    <div>
      <Navbar title="Settings" />
      <Sidebar to="Settings" />
      <Footer />
    </div>
  );
};
export default SettingsHomePage;
