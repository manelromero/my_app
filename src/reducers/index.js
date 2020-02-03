const initialState = [];

const partners = (state = initialState, action) => {
  switch (action.type) {
    case 'aaa':
      const { partners } = action.payload;
      return partners;
    default:
      return state;
  }
};

export default partners;

