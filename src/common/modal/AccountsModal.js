import { useState } from "react";
import { AccountsModalDiv } from "../PaymentScreen/PaymentScreenStyles";
import EachAccount from "./EachAccount";

const AccountsModal = ({ modalOpen, acc, onClick }) => {
  const [isModalOpen, setModalOpen] = useState(modalOpen);

  const modelHandle = (acc) => {
    setModalOpen((prev) => !prev);
    onClick(acc);
  };
  return (
    isModalOpen && (
      <AccountsModalDiv>
        {acc?.map((acc) => (
          <EachAccount acc={acc} onClick={modelHandle} />
        ))}
      </AccountsModalDiv>
    )
  );
};
export default AccountsModal;
