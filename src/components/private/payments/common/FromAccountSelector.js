import React from "react";
import { useSelector } from "react-redux";
import AccountsModal from "../../../../common/modal/AccountsModal";

const FromAccountSelector = (props) => {
  const accounts = useSelector((state) => state.accounts.accounts);
  console.log(accounts);
  return (
    <div>
      <AccountsModal modalOpen={true} acc={accounts}></AccountsModal>
    </div>
  );
};
export default FromAccountSelector;
