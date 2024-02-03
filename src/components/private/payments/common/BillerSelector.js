import React from "react";
import BillerModal from "../../../../common/modal/BillerModal";

const BillerSelector = ({ onClick }) => {
  const selecteFromAccount = (acc) => {
    onClick(acc);
  };
  return (
    <div>
      <BillerModal modalOpen={true} onClick={selecteFromAccount}></BillerModal>
    </div>
  );
};

export default BillerSelector;
