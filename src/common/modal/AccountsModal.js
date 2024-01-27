import { useState } from "react";
import {
  AccountListDropdown,
  AccountsModalDiv,
} from "../PaymentScreen/PaymentScreenStyles";
import { Image } from "../../components/private/AccountsList/AccountsListStyles";

const AccountsModal = ({ modalOpen, acc, children }) => {
  const [isModalOpen, setModalOpen] = useState(modalOpen);

  const modelHandle = () => {
    setModalOpen(false);
  };
  return (
    isModalOpen && (
      <AccountsModalDiv>
        {acc?.map((acc) => (
          <AccountListDropdown onClick={modelHandle}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
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
            </div>
            <div style={{ paddingRight: "10px" }}>
              <span>
                <h4 style={{ marginBottom: "-15px" }}>Balance</h4>
                <h4>{acc.balance}</h4>
              </span>
            </div>
          </AccountListDropdown>
        ))}
      </AccountsModalDiv>
    )
  );
};
export default AccountsModal;
