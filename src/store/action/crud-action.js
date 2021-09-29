export const ACTION_CREATE = "CRUD_ACTION CREATE";
export const ACTION_UPDATE = "CRUD_ACTION UPDATE";
export const ACTION_VIEW   = "CRUD_ACTION VIEW";

export const create = () => {
  return {
    type: ACTION_CREATE,
  };
};

export const update = (value) => {
  return {
    type: ACTION_UPDATE,
    data: value,
  };
};

export const view = (value) => {
  return {
    type: ACTION_VIEW,
    data: value,
  };
};
