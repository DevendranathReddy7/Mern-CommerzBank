import { SiCommerzbank } from "react-icons/si";
import {
  ButtonStyles,
  DivNav,
  FooterPara,
  TitleElemnt,
} from "../Styles/Styles";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { DivNotifications } from "../../pages/private/HomePage/HomePageStyles";
import NavButtons from "../Buttons/NavButtons";
const Navbar = (props) => {
  const userName = useSelector((state) => state.login.name);
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  return (
    <>
      <DivNav>
        <div style={{ display: "inline-flex" }}>
          <SiCommerzbank size={40} color="#0fbfeb" />
          <div onClick={() => navigate("/home")}>
            <TitleElemnt>Commerz</TitleElemnt>
          </div>
          <div>
            <TitleElemnt>{userName}</TitleElemnt>
          </div>
        </div>
        <div>
          <ButtonStyles>🔒 Logout</ButtonStyles>
        </div>
      </DivNav>
      {pathName === "/home" ? (
        <DivNotifications>
          <NavButtons to="/payments">Payments</NavButtons>
          <NavButtons to="/settings">Settings</NavButtons>
          <NavButtons to="/open-new-account">Open new account</NavButtons>
        </DivNotifications>
      ) : (
        <>
          <NavButtons to="/payments">Payments</NavButtons>
          <NavButtons to="/settings">Settings</NavButtons>
          <NavButtons to="/open-new-account">Open new account</NavButtons>
        </>
      )}
    </>
  );
};
export default Navbar;

export const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <DivNav>
        <FooterPara>©️ 2024 Commerz Bank. All rights reserved</FooterPara>
      </DivNav>
    </footer>
  );
};
