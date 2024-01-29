import React, { useEffect, useState } from "react";
import {
  InputSelectAccount,
  PaymentButtons,
  PaymentsButtonsDiv,
} from "../../../common/PaymentScreen/PaymentScreenStyles";
import { useNavigate } from "react-router-dom";
import FromAccountSelector from "./common/FromAccountSelector";
import EachAccount from "../../../common/modal/EachAccount";
import { useDispatch, useSelector } from "react-redux";
import { payment } from "../../../storeSetup/actions/paymentActions";

const FundsTransfer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pmntDetails = useSelector((state) => state.pmnts);
  const [isFromClicked, setIsFromCLicked] = useState(false);
  const [isToClicked, setIsToCLicked] = useState(false);

  const [selectedFromAccount, setSelectedFromAccount] = useState();
  const [selectedToAccount, setSelectedToAccount] = useState();

  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState({ amount: 0 });

  const [error, setError] = useState(false);
  const [accountsError, setaccountsError] = useState(false);

  useEffect(() => {
    dispatch(
      payment({
        selectedFromAccount,
        selectedToAccount,
        message,
        amount: amount.amount,
      })
    );
  }, [dispatch, amount, message, selectedToAccount, selectedFromAccount]);

  const accountClickHandler = () => {
    setIsFromCLicked((prev) => !prev);
  };

  const selectedAccount = (acc) => {
    setSelectedFromAccount(acc);
    setaccountsError(false);
  };

  const toAccount = (acc) => {
    setSelectedToAccount(acc);
    setaccountsError(false);
  };

  const clickedtoAccount = () => {
    setIsToCLicked((prev) => !prev);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount((prev) => ({ ...prev, amount: e.target.value }));
  };

  const cancelHandle = () => {
    navigate("/payments");
  };

  const continueHandle = (e) => {
    e.preventDefault();
    // dispatch(
    //   payment({ selectedFromAccount, selectedToAccount, message, amount })
    // );

    const amnt = pmntDetails?.amount;
    const availableBalance = pmntDetails?.fromAccount.balance;
    const frmAccount = pmntDetails?.fromAccount?.accountNumber;
    const to_account = pmntDetails?.toAccount?.accountNumber;

    if (frmAccount === to_account) {
      setaccountsError(true);
      return;
    } else if (parseInt(amnt) > parseInt(availableBalance)) {
      setError(true);
      return;
    }
    setError(false);
    setaccountsError(false);
    navigate("/payments/self-transfer-review");
  };

  return (
    <>
      <div style={{ flex: 1 }}>
        {/* From Account */}
        {!selectedFromAccount && (
          <InputSelectAccount
            placeholder="Select from account"
            onClick={accountClickHandler}
          />
        )}

        {isFromClicked && <FromAccountSelector onClick={selectedAccount} />}

        {selectedFromAccount && (
          <EachAccount
            acc={selectedFromAccount}
            onClick={() => {
              accountClickHandler(true);
            }}
          />
        )}

        {/* To Account */}
        {!selectedToAccount && (
          <InputSelectAccount
            placeholder="Select to account"
            onClick={clickedtoAccount}
          />
        )}

        {isToClicked && <FromAccountSelector onClick={toAccount} />}

        {selectedToAccount && (
          <EachAccount
            acc={selectedToAccount}
            onClick={() => clickedtoAccount(true)}
          />
        )}
        {accountsError && (
          <p
            style={{
              color: "red",
              fontFamily: "revert-layer",
              marginLeft: "9%",
              marginTop: "-10px",
            }}
          >
            you've selected same account in both From & To..please select
            different accounts
          </p>
        )}
        <InputSelectAccount
          placeholder="Message"
          onChange={(e) => messageHandler(e)}
        />
        <InputSelectAccount
          placeholder="Amount"
          onChange={(e) => amountHandler(e)}
        />
        {error && (
          <p
            style={{
              color: "red",
              fontFamily: "revert-layer",
              marginLeft: "9%",
              marginTop: "-10px",
            }}
          >
            Please enter valid amount
          </p>
        )}

        <PaymentsButtonsDiv>
          <PaymentButtons cancel onClick={cancelHandle}>
            Cancel
          </PaymentButtons>
          <PaymentButtons onClick={continueHandle}>Next</PaymentButtons>
        </PaymentsButtonsDiv>
      </div>
    </>
  );
};
export default FundsTransfer;
