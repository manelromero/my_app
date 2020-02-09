const showLevel = level => dispatch => {
  return dispatch({ type: "SHOW_IMAGE", payload: level });
};

export default showLevel;
