import { createStore, applyMiddleware } from "redux";
import CrudReducer from "./reducer/crud-reducer";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  CrudReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
