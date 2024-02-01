export const ftxPayment = (payment) => {
  return { type: "ftx_payment", payload: payment };
};

export const billPayment = (payment) => {
  return { type: "bill_payment", payload: payment };
};
