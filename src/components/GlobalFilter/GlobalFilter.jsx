import React from 'react';
import './GlobalFilter.scss';
import { Radio } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

import * as actions from '../../Redux/actions/actionCreators';

function GlobalFilter({ data, onFastFilter, onCheapFilter, isLoading }) {
  if (!isLoading) {
    onCheapFilter(data);
  }
  return (
    <Radio.Group className="filter-group" defaultValue="a" buttonStyle="solid">
      <Radio.Button
        onClick={() => {
          onCheapFilter(data);
        }}
        className="filter-button"
        value="a"
      >
        Самый дешевый
      </Radio.Button>
      <Radio.Button
        onClick={() => {
          onFastFilter(data);
        }}
        className="filter-button"
        value="b"
      >
        Самый быстрый
      </Radio.Button>
    </Radio.Group>
  );
}

const mapStateToProps = (state) => ({
  data: state.ticketsReducer.data,
  filtredData: state.globalFilterReducer.filtredData,
  isLoading: state.ticketsReducer.isLoading,
});
export default connect(mapStateToProps, actions)(GlobalFilter);
