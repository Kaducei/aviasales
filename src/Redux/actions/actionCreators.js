/* eslint-disable no-await-in-loop */
export const filterToggle = (property) => ({
  type: 'FILTER_TOGGLE',
  payload: property,
});

export const filterToggleAll = () => ({
  type: 'FILTER_TOGGLE_ALL',
});

export const onCheapFilter = (property) => ({
  type: 'CHEAP',
  payload: property,
});

export const onFastFilter = (property) => ({
  type: 'FAST',
  payload: property,
});

export const showMore = () => ({ type: 'FIVE' });

export const resetTicketsNumbers = () => ({ type: 'RESET' });

export const ticketsLoad = () => async (dispatch) => {
  const allTickets = [];
  const searchIdresponse = await fetch('https://aviasales-test-api.kata.academy/search');
  const { searchId } = await searchIdresponse.json();

  let isNotLastTicketsPack = true;
  let isFirstTicketsPackLoaded = false;

  while (isNotLastTicketsPack) {
    const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    // eslint-disable-next-line no-continue
    if (ticketsResponse.status !== 200) continue;
    const { tickets, stop } = await ticketsResponse.json();
    if (!isFirstTicketsPackLoaded) {
      isFirstTicketsPackLoaded = true;
      dispatch({ type: 'FIRST_TICKETS_PACK_LOADED', payload: tickets });
    }
    allTickets.push(...tickets);
    if (stop) isNotLastTicketsPack = false;
  }

  return dispatch({ type: 'ALL_TICKETS_LOADED', payload: allTickets });
};
