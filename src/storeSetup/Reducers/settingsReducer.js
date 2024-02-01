const intitalState = {
  billerName: "",
  billerCode: "",
  billerRef: "",
};

const billers = (state = intitalState, action) => {
  switch (action.type) {
    case "SAVE_BILLERS":
      return {
        ...state,
        billerName: action.payload.selectedFromAccount,
        billerCode: action.payload.selectedToAccount,
        billerRef: action.payload.message,
      };
    default:
      return state;
  }
};

export default billers;
