import React from "react";
import { HistoryList, Image } from "./TransactionHistoryStyles";
import { formatDate } from "../../../utils/getReadableDate";

const EachTransaction = ({ tran }) => {
  let to;
  if (tran.hasOwnProperty("toAccount")) {
    to = "toAccount";
  } else if (tran.hasOwnProperty("biller")) {
    to = "biller";
  } else if (tran.hasOwnProperty("email")) {
    to = "email";
  } else if (tran.hasOwnProperty("number")) {
    to = "number";
  }

  return (
    <>
      <HistoryList>
        <Image
          src={
            tran.type ? `${process.env.PUBLIC_URL}/pmnts/${tran.type}.png` : ""
          }
          onError={(e) => {
            e.target.src = `${process.env.PUBLIC_URL}/pmnts/na.png`;
          }}
          alt="type"
        />
        <div>{formatDate(tran.paymentDate)}</div>
        <div>
          {/* <div>Cheque</div> */}
          {tran.fromAccount}
        </div>
        {to === "toAccount" ? (
          <div>{tran.toAccount}</div>
        ) : to === "biller" ? (
          <div>
            {tran.biller.billerName},{tran.biller.billerCode}
          </div>
        ) : (
          (to = "email" ? <div>{tran.email}</div> : "")
        )}
        {/* <div>
          {tran?.toAccount || (
            <>
              {
                (tran?.transferMode,
                tran?.email || tran?.biller?.billerName,
                tran?.biller?.billerCode)
              }
            </>
          )}
        </div> */}
        <div>{tran.amount}</div> <div>{tran.message || "NA"}</div>
      </HistoryList>
    </>
  );
};
export default EachTransaction;
