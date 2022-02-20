import { SET_MESSAGES } from "../action_types/app_state";
import { createAction } from "redux-actions";

const setMessages = createAction(SET_MESSAGES);

export { setMessages };
