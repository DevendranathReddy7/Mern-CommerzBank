import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./storeSetup/store";
import { Provider } from "react-redux";

import LoginPage from "./pages/public/LoginPage";
import SigninPage from "./pages/public/SigninPage";
import HomePage from "./pages/private/HomePage/HomePage";
import PaymentsHomePage from "./pages/private/payments/PaymentsHomePage";
import SettingsHomePage from "./pages/private/settings/SettingsHomePage";
import OpenAnAccount from "./pages/private/open account/OpenAnAccount";

const App = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Unfortunately you can't reload the session, if you continue you have to login again if you want to use internet banking.Please click Cancel if wish to continue in the same session";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    // Add event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/payments" element={<PaymentsHomePage />} />
          <Route path="/settings" element={<SettingsHomePage />} />
          <Route path="/open-new-account" element={<OpenAnAccount />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
