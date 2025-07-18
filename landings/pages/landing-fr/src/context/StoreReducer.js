const initialStore = {
  geo: null,
};

const types = {
  reset: "reset",
  setGeo: "geo/set",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setGeo:
      return {
        ...state,
        geo: action.payload,
      };
    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
