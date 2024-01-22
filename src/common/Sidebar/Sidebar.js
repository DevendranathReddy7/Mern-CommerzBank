import React from "react";
import {
  DivSideBar,
  PaymentButtonStyle,
  SidebarContainer,
} from "../Styles/Styles";
import { Link } from "react-router-dom";

const Sidebar = ({ to }) => {
  return (
    <SidebarContainer>
      {to?.map((item, index) => (
        <DivSideBar>
          <PaymentButtonStyle key={index}>
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "#0fbfeb" }}
            >
              {item.name}
            </Link>
          </PaymentButtonStyle>
        </DivSideBar>
      ))}
    </SidebarContainer>
  );
};
export default Sidebar;
