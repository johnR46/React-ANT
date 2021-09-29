import {
  ACTION_CREATE,
  ACTION_UPDATE,
  ACTION_VIEW,
} from "../action/crud-action";

const initialState = {
  fromValue: {},
  result: [],
  activeIdx: -1,
  record: {},
  mode: "",
};

const CrudReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CREATE:
      return Object.assign({}, state, {
        fromValue: {},
        result: [],
        activeIdx: -1,
        mode: ACTION_CREATE,
      });
    case ACTION_UPDATE:
      return Object.assign({}, state, {
        fromValue: action.data,
        mode: ACTION_UPDATE,
      });
    case ACTION_VIEW:
      return Object.assign({}, state, {
        fromValue: action.data,
        mode: ACTION_VIEW,
      });
    default:
      return state;
  }
};

export default CrudReducer;
