import { SiCommerzbank } from "react-icons/si";
import {
  ButtonStyles,
  DivNav,
  FooterPara,
  TitleElemnt,
} from "../Styles/Styles";
const Navbar = (props) => {
  return (
    <DivNav>
      <div style={{ display: "inline-flex" }}>
        <SiCommerzbank size={40} color="#0fbfeb" />
        <div>
          <TitleElemnt>Commerz</TitleElemnt>
        </div>
      </div>
      <div>
        <ButtonStyles>Logout</ButtonStyles>
      </div>
    </DivNav>
  );
};
export default Navbar;

export const Footer = () => {
  return (
    <footer>
      <DivNav>
        <FooterPara>©️ 2024 Commerz Bank. All rights reserved</FooterPara>
      </DivNav>
    </footer>
  );
};
