const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_IMAGE":
      const image = `showImage${action.payload}`;
      const previousValue = state[image];

      return { ...state, [image]: !previousValue };
    default:
      return state;
  }
};

export default reducer;
