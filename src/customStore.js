import reducer from "./reducer";

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
  }

  function getState() {
    return state;
  }

  return {
    // dispatch, subscribe, getState
    getState,
    dispatch,
  };
}

export default createStore(reducer);
