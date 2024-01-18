import React from "react";
import Navbar, { Footer } from "../../../common/NavBar/Navbar";
import { DivNotifications } from "./HomePageStyles";

const HomePage = (props) => {
  return (
    <div>
      <Navbar />
      <DivNotifications>
        <h1>Home pag</h1>
      </DivNotifications>
      <Footer />
    </div>
  );
};
export default HomePage;
