/* eslint-disable default-param-last */
const initialState = {
  buttonStatus: 'buttonCheap',
};
export default function globalFilterReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHEAP': {
      return {
        ...state,
        buttonStatus: 'buttonCheap',
      };
    }
    case 'FAST': {
      return {
        ...state,
        buttonStatus: 'buttonFast',
      };
    }
    default:
      return state;
  }
}
