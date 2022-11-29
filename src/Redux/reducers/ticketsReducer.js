const initialState = {
  data: [],
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_LOAD':
      return { ...state, isLoading: true };
    case 'FIRST_TICKETS_PACK_LOADED':
      return {
        data: action.payload,
        isLoading: true,
      };
    case 'ALL_TICKETS_LOADED':
      return {
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
