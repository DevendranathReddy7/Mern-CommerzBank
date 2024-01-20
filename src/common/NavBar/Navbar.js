import { SiCommerzbank } from "react-icons/si";
import {
  ButtonStyles,
  DivNav,
  FooterPara,
  TitleElemnt,
} from "../Styles/Styles";
import { useSelector } from "react-redux";
const Navbar = (props) => {
  const userName = useSelector((state) => state.login.name);
  return (
    <DivNav>
      <div style={{ display: "inline-flex" }}>
        <SiCommerzbank size={40} color="#0fbfeb" />
        <div>
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
  );
};
export default Navbar;

export const Footer = () => {
  return (
    <footer style={{ flexShrink: 0 }}>
      <DivNav>
        <FooterPara>©️ 2024 Commerz Bank. All rights reserved</FooterPara>
      </DivNav>
    </footer>
  );
};
