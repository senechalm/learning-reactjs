import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer, requestUserInfo } from "../common/user";

export const rootReducer = combineReducers({
  user: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

store.dispatch(requestUserInfo());

export default store;
 