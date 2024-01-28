import { combineReducers } from "redux";
import LOGIN from "./loginReducer";
import SaveAccounts from "./accountsReducer";
import payments from "./paymentsReducer";

const rootReducer = combineReducers({
  login: LOGIN,
  accounts: SaveAccounts,
  pmnts: payments,
});

export default rootReducer;
