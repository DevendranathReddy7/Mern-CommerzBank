import React from "react";
import { DivAccount, Image } from "./AccountsListStyles";
import { IoIosArrowForward } from "react-icons/io";
const AccountItem = ({ acc }) => {
  return (
    <DivAccount>
      <div>
        <Image
          src={
            acc.accountName
              ? `${process.env.PUBLIC_URL}/accounts/${acc.accountName}.png`
              : `${process.env.PUBLIC_URL}/accounts/cheque.png`
          }
          onError={(e) => {
            e.target.src = `${process.env.PUBLIC_URL}/accounts/cheque.png`;
          }}
          alt="account"
        />
      </div>
      <div>
        <span>
          <h4 style={{ marginBottom: "-15px" }}>{acc.accountName}</h4>
          <h4>{acc.accountNumber}</h4>
        </span>
      </div>
      <div>
        <span>
          <h4 style={{ marginBottom: "-15px" }}>Balance</h4>
          <h4>{acc.balance}</h4>
        </span>
      </div>
      <div>
        <IoIosArrowForward style={{ marginRight: "20px" }} />
      </div>
    </DivAccount>
  );
};
export default AccountItem;
