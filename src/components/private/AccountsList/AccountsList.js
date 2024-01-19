import React from "react";
import { DivAccountsList, ListItem } from "./AccountsListStyles";
import AccountItem from "./AccountItem";

const users = [
  {
    accounts: {
      accountName: "Cheque",
      accountNumber: "123456",
      Balance: 20,
      funds: 30,
    },
  },
  {
    accounts: {
      accountName: "Cheque",
      accountNumber: "234567",
      Balance: 20,
      funds: 30,
    },
  },
];
const AccountsList = (props) => {
  return (
    <DivAccountsList>
      {users.map((acc) => (
        <ListItem acc>
          <AccountItem acc={acc} />
        </ListItem>
      ))}
    </DivAccountsList>
  );
};
export default AccountsList;
