import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import * as actions from '../../Redux/actions/actionCreators';
import Ticket from '../Ticket/Ticket';

import styles from './TicketList.module.scss';

const antIcon = (
  <LoadingOutlined
    className="imgSpin"
    style={{
      fontSize: 70,
    }}
    spin
  />
);
function TicketList({ data, isLoading, buttonStatus, ticketsNumber, filters, resetTicketsNumbers }) {
  const [sliceData, setSliceData] = useState([]);
  const [filtredData, setFiltredData] = useState([]);

  useEffect(() => {
    let filtersData = data;
    if (filters.length) {
      filtersData = filtersData.filter(({ segments }) => {
        const [segment1, segment2] = segments;
        if (segment1.stops.length !== segment2.stops.length) {
          return false;
        }

        if (filters.includes('1 пересадка') && segment1.stops.length === 1) {
          return true;
        }
        if (filters.includes('2 пересадки') && segment1.stops.length === 2) {
          return true;
        }
        if (filters.includes('3 пересадки') && segment1.stops.length === 3) {
          return true;
        }
        if (filters.includes('Без пересадок') && segment1.stops.length === 0) {
          return true;
        }
        return false;
      });
    }

    if (buttonStatus === 'buttonCheap') {
      filtersData = filtersData.sort((a, b) => a.price - b.price);
    }
    if (buttonStatus === 'buttonFast') {
      filtersData = filtersData.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + a.segments[1].duration)
      );
    }

    setFiltredData(filtersData);
    resetTicketsNumbers();
  }, [buttonStatus, filters, data]);

  useEffect(() => {
    setSliceData(() => filtredData.slice(0, ticketsNumber));
  }, [ticketsNumber, filtredData, buttonStatus]);

  return isLoading ? (
    <div className={styles.spinner}>
      <Spin indicator={antIcon} />
    </div>
  ) : (
    <div>
      {sliceData.map((item) => (
        <Ticket item={item} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  data: state.ticketsReducer.data,
  filters: state.siderFilterReducer.filters,
  isLoading: state.ticketsReducer.isLoading,
  buttonStatus: state.globalFilterReducer.buttonStatus,
  ticketsNumber: state.showMoreReducer.ticketsNumber,
});
export default connect(mapStateToProps, actions)(TicketList);
