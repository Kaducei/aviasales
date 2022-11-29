/* eslint-disable default-param-last */
const initialState = {
  ticketsNumber: 5,
};
function showMoreReducer(state = initialState, action) {
  switch (action.type) {
    case 'FIVE': {
      return { ticketsNumber: state.ticketsNumber + 5 };
    }
    case 'RESET':
      return { ticketsNumber: initialState.ticketsNumber };
    default:
      return state;
  }
}
export default showMoreReducer;
