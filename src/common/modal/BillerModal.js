import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountsModalDiv } from "../PaymentScreen/PaymentScreenStyles";
import EachBiller from "./EachBiller";
import { saveBillers } from "../../storeSetup/actions/settingsActions";

const BillerModal = ({ modalOpen, acc, onClick }) => {
  const [isModalOpen, setModalOpen] = useState(modalOpen);
  const [billers, setBilers] = useState();
  const currentUserId = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();

  const handleOverlayClick = (e) => {
    // Check if the click occurred on the overlay (outside the modal content)
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    const getBillers = async () => {
      const responseData = await fetch(
        `http://localhost:5000/settings/billers/${currentUserId}`
      );
      const response = await responseData.json();
      dispatch(saveBillers({ billers: response.billers, currentUserId }));
      setBilers(response.billers);
    };
    getBillers();
  }, [currentUserId, dispatch]);

  const modelHandle = (acc) => {
    setModalOpen((prev) => !prev);
    onClick(acc);
  };
  return (
    isModalOpen && (
      <AccountsModalDiv onClick={handleOverlayClick}>
        {billers?.map((acc) => (
          <EachBiller acc={acc} onClick={modelHandle} />
        ))}
      </AccountsModalDiv>
    )
  );
};
export default BillerModal;
