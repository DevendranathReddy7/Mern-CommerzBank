import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import Sidebar from "../../../common/Sidebar/Sidebar";

const settings = [
  { path: "/settings/manage-billers", name: "Manage Billers" },
  { path: "/settings/manage-payees", name: "Manage Payees" },
];
const SettingsHomePage = (props) => {
  return (
    <div>
      <Navbar title="Settings" />
      <Sidebar to={settings} />
      <Footer />
    </div>
  );
};
export default SettingsHomePage;
