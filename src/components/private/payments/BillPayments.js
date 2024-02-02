import React, { useEffect, useState } from "react";
import {
  InputSelectAccount,
  PaymentButtons,
  PaymentsButtonsDiv,
} from "../../../common/PaymentScreen/PaymentScreenStyles";
import FromAccountSelector from "./common/FromAccountSelector";
import EachAccount from "../../../common/modal/EachAccount";
import BillerSelector from "./common/BillerSelector";
import EachBiller from "../../../common/modal/EachBiller";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { billPayment } from "../../../storeSetup/actions/paymentActions";

const BillPayments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedFromAccount, setSelectedFromAccount] = useState();
  const [isFromClicked, setIsFromCLicked] = useState(false);

  const [selectedBiller, setSelectedBiller] = useState();
  const [isBillerClicked, setIsBillerClicked] = useState(false);

  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState({ amount: 0 });

  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(
      billPayment({
        selectedFromAccount,
        selectedBiller,
        message,
        amount: amount.amount,
        type: "bpay",
      })
    );
  }, [dispatch, amount, message, selectedBiller, selectedFromAccount]);
  const accountClickHandler = () => {
    setIsFromCLicked(true);
    setIsBillerClicked(false);
  };

  const selectedAccount = (acc) => {
    setSelectedFromAccount(acc);
  };

  const billerClickHandler = () => {
    setIsBillerClicked(true);
    setIsFromCLicked(false);
  };

  const clickedBiller = (acc) => {
    setSelectedBiller(acc);
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

    // const amnt = pmntDetails?.amount;
    // const availableBalance = pmntDetails?.fromAccount.balance;

    // if (parseInt(amnt) > parseInt(availableBalance)) {
    //   setError(true);
    //   return;
    // }
    setError(false);
    navigate("/payments/bill-payments-review");
  };
  return (
    <div style={{ flex: 1 }}>
      <>
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
      </>
      <>
        {!selectedBiller && (
          <InputSelectAccount
            placeholder="Select Biller"
            onClick={billerClickHandler}
          />
        )}

        {isBillerClicked && <BillerSelector onClick={clickedBiller} />}

        {selectedBiller && (
          <EachBiller
            acc={selectedBiller}
            onClick={() => {
              billerClickHandler(true);
            }}
          />
        )}
      </>
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
  );
};
export default BillPayments;
