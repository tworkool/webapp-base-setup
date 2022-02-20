import { setMessages } from "../actions/app_state";
import { combineActions, handleActions } from "redux-actions";
import { actionReducer } from "./utils/reducers";

const appStateInit = {
  messages: [],
};

// combine all actions here
const appStateAction = combineActions(setMessages);

// create reducer from one combined actiontype
const appStateReducer = handleActions(
  { [appStateAction]: actionReducer },
  appStateInit
);

export { appStateReducer, appStateInit };
