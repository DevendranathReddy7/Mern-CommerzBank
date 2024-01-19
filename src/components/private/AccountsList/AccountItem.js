import React from "react";
import { DivAccount } from "./AccountsListStyles";

const AccountItem = ({ acc }) => {
  return (
    <DivAccount>
      {acc.accounts.accountName}
      {acc.accounts.accountNumber}
      {acc.accounts.Balance}
      {acc.accounts.funds}
    </DivAccount>
  );
};
export default AccountItem;
