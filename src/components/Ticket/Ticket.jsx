import React from 'react';

import styles from './Ticket.module.scss';

const transfers = (stops) => {
  switch (stops) {
    case 0:
      return '0 пересадок';
    case 1:
      return '1 пересадка';
    default:
      return `${stops} пересадки`;
  }
};

const formatDate = (date, duration) => {
  const formatedDate = new Date(date);
  const formatedDateTwo = new Date(formatedDate.getTime() + duration * 60 * 1000);
  return `${String(formatedDate.getUTCHours()).padStart(2, '0')}:${String(formatedDate.getUTCMinutes()).padStart(
    2,
    '0'
  )} - ${String(formatedDateTwo.getUTCHours()).padStart(2, '0')}:${String(formatedDateTwo.getUTCMinutes()).padStart(
    2,
    '0'
  )}`;
};

function Ticket({ item }) {
  const { price, carrier, segments } = item;
  return (
    <div key={`${price}${carrier}${segments.length}${Math.random(10, 10000)}`} className={styles.ticket}>
      <header>
        <h2>{price.toLocaleString('ru-RU')} ₽</h2>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="#" />
      </header>
      {segments.map((segment) => {
        const { origin, destination, duration, stops, date } = segment;
        return (
          <div className={styles.infoFirstLine} key={`${origin}${destination}${duration}${stops}${date}`}>
            <div>
              <div className={styles.ticketInfo}>
                {origin} - {destination}
              </div>
              <div className={styles.ticketValue}>{formatDate(date, duration)}</div>
            </div>
            <div>
              <div className={styles.ticketInfo}>в пути</div>
              <div className={styles.ticketValue}>{`${Math.floor(duration / 60)}h ${Math.floor(duration % 60)}m`}</div>
            </div>
            <div className={styles.lastInfo}>
              <div className={styles.ticketInfo}>{transfers(stops.length)}</div>
              <div className={styles.ticketValue}>{stops.length ? stops.join(', ') : '-'}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Ticket;
