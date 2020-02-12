const showLevel = level => dispatch => {
  return dispatch({ type: "TOGGLE_IMAGE", payload: level });
};

export default showLevel;
