/* eslint-disable default-param-last */
const initialState = {
  showsData: [],
};

export default function transferFilterReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOWS':
      return { showsData: action.payload };
    default:
      return state;
  }
}
