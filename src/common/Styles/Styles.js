import styled from "styled-components";

//input styles
export const InputStyles = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
`;

//Button Styles
export const ButtonStyles = styled.button`
  display: block;
  width: 103%;
  height: 35px;
  background-color: #0fbfeb;
  border-style: none;
  font-weight: bold;
  border-radius: 3px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

//NavBar Div

export const DivNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 5px 5px;
  background-color: #12141c;
`;

export const TitleElemnt = styled.span`
  font-weight: bold;
  color: #0fbfeb;
  font-size: 24px;
  margin: 10px;
`;

export const FooterPara = styled.p`
  color: white;
`;

export const DivErrorModal = styled.div`
  background-color: #ff004d;
  padding: 5px 30px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavButtonStyle = styled.button`
  background-color: #12141c;
  border-style: none;
  color: #0fbfeb;
  margin: 20px;
  padding: 10px;
  font-weight: bold;
  border-radius: 3px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

//SideBarDiv

export const DivSideBar = styled.div`
  width: 25%;
  background-color: #eef5ff;
  height: 440px;
  margin: -10px 0px 0px 20px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

//Payment Buutons

export const PaymentButtonStyle = styled.button`
  display: flex;
  align-items: "flex-end";
  background-color: #12141c;
  border-style: none;
  box-shadow: 10px 10px 20px #888888;
  color: #0fbfeb;
  margin: 5% 15%;
  padding: 5%;
  font-weight: bold;
  border-radius: 3px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
