const intitalState = {
  fromAccount: {},
  toAccount: {},
  message: "",
  amount: 0,
};

const payments = (state = intitalState, action) => {
  switch (action.type) {
    case "PAYMENTS":
      return {
        ...state,
        fromAccount: action.payload.selectedFromAccount,
        toAccount: action.payload.selectedToAccount,
        message: action.payload.message,
        amount: action.payload.amount,
      };
    default:
      return state;
  }
};

export default payments;
