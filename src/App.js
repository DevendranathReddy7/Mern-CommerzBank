import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./storeSetup/store";
import { Provider } from "react-redux";

import LoginPage from "./pages/public/LoginPage";
import SigninPage from "./pages/public/SigninPage";

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
