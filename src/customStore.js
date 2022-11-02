function createStore() {
  let state;

  function getState() {
    return state;
  }

  return {
    // dispatch, subscribe, getState
    getState,
  };
}

export default createStore();
