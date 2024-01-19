import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import { DivNotifications } from "./HomePageStyles";
import AccountsList from "../../../components/private/AccountsList/AccountsList";

const HomePage = (props) => {
  return (
    <div>
      <Navbar />
      <DivNotifications>
        <h3>Welcome Back Dev!</h3>
      </DivNotifications>
      <AccountsList />
      <Footer />
    </div>
  );
};
export default HomePage;
