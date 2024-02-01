const intitalState = {
  fromAccount: {},
  toAccount: {},
  message: "",
  amount: 0,
  type: "",
  biller: {
    billerName: "",
    billerCode: "",
    billerRef: "",
  },
};

const payments = (state = intitalState, action) => {
  switch (action.type) {
    case "ftx_payment":
      return {
        ...state,
        fromAccount: action.payload.selectedFromAccount,
        toAccount: action.payload.selectedToAccount,
        message: action.payload.message,
        amount: action.payload.amount,
        type: action.payload.type,
      };
    case "bill_payment":
      return {
        ...state,
        fromAccount: action.payload.selectedFromAccount,
        message: action.payload.message,
        amount: action.payload.amount,
        type: action.payload.type,
        biller: action.payload.selectedBiller,
      };
    default:
      return state;
  }
};

export default payments;
