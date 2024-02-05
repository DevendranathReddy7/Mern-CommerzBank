import React, { useEffect, useState } from "react";
import {
  InputSelectAccount,
  PaymentButtons,
  PaymentsButtonsDiv,
} from "../../../../common/PaymentScreen/PaymentScreenStyles";
import {
  CheckBox,
  CheckboxChildDiv,
  CheckboxParentDiv,
  Label,
} from "../../transactionHistory/TransactionHistoryStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const paymentModes = [
  { id: 1, label: "Account Number" },
  { id: 2, label: "Email" },
  { id: 3, label: "Mobile Number" },
];

const AddPayee = () => {
  const currentUser = useSelector((state) => state.login.currentUser);
  const [selectedRadioButton, setSelectedRadioButton] = useState({
    id: 1,
    label: "Account Number",
  });
  const [payeeDetails, setPayeeDetails] = useState({
    payeeName: "",
    payeeType: "",
    payeeValue: "",
    owner: currentUser,
  });
  const navigate = useNavigate();
  const { state } = useLocation();
  const [emailValidation, setemailValidation] = useState(false);

  useEffect(() => {
    if (state?.editingPayee) {
      setPayeeDetails(state.editingPayee);
    }
  }, [state]);

  const radioButtonHandle = (pmnt) => {
    setSelectedRadioButton(pmnt);
    setemailValidation(false);
    setPayeeDetails((prev) => ({ ...prev, payeeType: "", payeeValue: "" }));
  };

  const fromAccountHandle = (value) => {
    setPayeeDetails((prev) => ({ ...prev, payeeName: value }));
  };

  const toAccountHandle = (mode, value) => {
    setemailValidation(false);
    if (mode === "Email") {
      let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      const isEmailValid = regex.test(value);
      if (!isEmailValid) {
        setemailValidation(true);
      }
    }
    console.log(emailValidation);
    setPayeeDetails((prev) => ({
      ...prev,
      payeeType: mode,
      payeeValue: value,
    }));
  };

  const cancelHandle = () => {
    navigate("/settings/manage-payees");
  };
  const AddPayeeHandle = async () => {
    const response = await fetch(
      "http://localhost:5000/settings/create-payees",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payeeName: payeeDetails.payeeName,
          transferType: payeeDetails.payeeType,
          paymentValue: payeeDetails.payeeValue,
          owner: payeeDetails.owner,
        }),
      }
    );

    await response.json();
  };

  const SavePayeeDetails = async () => {
    const response = await fetch("http://localhost:5000/settings/edit-payees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payeeName: payeeDetails.payeeName,
        transferType: payeeDetails.payeeType,
        paymentValue: payeeDetails.payeeValue,
        owner: payeeDetails.owner,
      }),
    });
    await response.json();
  };
  return (
    <div style={{ flex: 1 }}>
      <Label style={{ marginLeft: "9%" }}>Select transfer mode:</Label>

      <CheckboxParentDiv>
        {paymentModes.map((pmnt) => (
          <CheckboxChildDiv key={pmnt.id}>
            <CheckBox
              type="radio"
              onChange={() => radioButtonHandle(pmnt)}
              checked={selectedRadioButton?.id === pmnt?.id}
            />
            <Label>{pmnt.label}</Label>
          </CheckboxChildDiv>
        ))}
      </CheckboxParentDiv>

      <InputSelectAccount
        placeholder="Payee name"
        onChange={(e) => fromAccountHandle(e.target.value)}
      />
      <InputSelectAccount
        placeholder={selectedRadioButton.label}
        value={payeeDetails.payeeValue}
        onChange={(e) =>
          toAccountHandle(selectedRadioButton.label, e.target.value)
        }
      />
      {emailValidation && (
        <Label style={{ marginLeft: "9%", color: "red" }}>
          Enter a valid email!
        </Label>
      )}
      <PaymentsButtonsDiv>
        <PaymentButtons cancel onClick={cancelHandle}>
          Cancel
        </PaymentButtons>
        <PaymentButtons
          onClick={state?.isEdit ? SavePayeeDetails : AddPayeeHandle}
          type="submit"
          disabled={emailValidation}
        >
          {state?.isEdit ? "Save" : "Add"}
        </PaymentButtons>
      </PaymentsButtonsDiv>
    </div>
  );
};
export default AddPayee;
