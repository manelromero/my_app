const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_IMAGE":
      const image = `showImage${action.payload}`;

      return { ...state, [image]: true };
    default:
      return state;
  }
};

export default reducer;
