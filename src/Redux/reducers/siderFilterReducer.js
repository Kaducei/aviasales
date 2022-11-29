/* eslint-disable indent */

// eslint-disable-next-line default-param-last
function siderFilterReducer(state = { filters: ['2 пересадки'] }, action) {
  switch (action.type) {
    case 'FILTER_TOGGLE_ALL': {
      return state.filters.length < 4
        ? { filters: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'] }
        : { filters: [] };
    }
    case 'FILTER_TOGGLE': {
      if (action.payload) {
        const id = state.filters.indexOf(action.payload);
        if (id === -1) {
          return { filters: [...state.filters, action.payload] };
        }
        const newFilters = [...state.filters].filter((item) => item !== action.payload);
        return { filters: newFilters };
      }
      return state;
    }
    default:
      return state;
  }
}

export default siderFilterReducer;
