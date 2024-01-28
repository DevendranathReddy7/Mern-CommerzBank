import React, { useState } from "react";
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
  const [amount, setAmount] = useState(0);

  const [error, setError] = useState(false);
  const accountClickHandler = () => {
    setIsFromCLicked((prev) => !prev);
  };

  const selectedAccount = (acc) => {
    setSelectedFromAccount(acc);
  };

  const toAccount = (acc) => {
    setSelectedToAccount(acc);
  };

  const clickedtoAccount = () => {
    setIsToCLicked((prev) => !prev);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const cancelHandle = () => {
    navigate("/payments");
  };

  const continueHandle = (e) => {
    e.preventDefault();
    dispatch(
      payment({ selectedFromAccount, selectedToAccount, message, amount })
    );

    const amnt = pmntDetails.amount;
    const availableBalance = pmntDetails?.fromAccount.balance;

    if (amnt > availableBalance) {
      setError(true);
      return;
    }

    navigate("/payments/funds-transfer-review");
    setError(false);
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
            onClick={() => selectedAccount()}
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
            onClick={() => selectedAccount()}
          />
        )}

        <InputSelectAccount
          placeholder="Message"
          onChange={(e) => messageHandler(e)}
        />
        <InputSelectAccount
          placeholder="Amount"
          onChange={(e) => amountHandler(e)}
        />
        {error && <p>Please enter valid amount</p>}

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
