import React, { useEffect, useState } from "react";
import {
  DivAccountsList,
  ListItem,
  NoAccountlistStyle,
} from "./AccountsListStyles";
import AccountItem from "./AccountItem";
import { useSelector } from "react-redux";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { ButtonStyles } from "../../../common/Styles/Styles";
import Loader from "../../../common/loading/Loader";

const AccountsList = () => {
  const [accounts, setAccounts] = useState();
  const currentUserId = useSelector((state) => state.login.currentUser);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getAccounts = async () => {
      setIsLoading(true);
      const responseData = await fetch(
        `http://localhost:5000/accounts/${currentUserId}`
      );
      const response = await responseData.json();
      setAccounts(response.accounts);
      setIsLoading(false);
    };
    getAccounts();
  }, [currentUserId]);

  return (
    <DivAccountsList>
      {isLoading && <Loader message="Loading your Accounts" />}
      {accounts?.length === 0 ? (
        <>
          <NoAccountlistStyle>
            <VscError size={"15%"} color="#FF7F7F" />
            <span>
              <p>
                You don't have any accounts with us yet, create one by clicking
                on
              </p>
              <Link to="/open-new-account" style={{ textDecoration: "none" }}>
                <ButtonStyles login>Open an account</ButtonStyles>
              </Link>
            </span>
          </NoAccountlistStyle>
        </>
      ) : (
        <>
          {accounts?.map((acc) => (
            <ListItem key={acc._id}>
              <AccountItem acc={acc} />
            </ListItem>
          ))}
        </>
      )}
    </DivAccountsList>
  );
};
export default AccountsList;
