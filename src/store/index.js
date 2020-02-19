import { combineReducers } from "redux";
import giftsReducer from "../modules/state/giftReducers/giftsReducer";
import loginReducer from "../modules/state/headerReducers/loginReducer";
import usersReducer from "../modules/state/userReducers/usersReducer";

const rootReducer = combineReducers({
  gifts: giftsReducer,
  login: loginReducer,
  users: usersReducer
});

export default rootReducer;
