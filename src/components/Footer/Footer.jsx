import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import './Footer.scss';
import * as actions from '../../Redux/actions/actionCreators';

function Footer({ showMore, isLoading }) {
  return isLoading ? (
    <div />
  ) : (
    <Button
      onClick={() => {
        showMore();
      }}
      size="large"
      type="primary"
      block
    >
      Показать ещё 5 билетов
    </Button>
  );
}
const mapStateToProps = (state) => ({
  ticketsNumber: state.showMoreReducer.ticketsNumber,
  isLoading: state.ticketsReducer.isLoading,
});
export default connect(mapStateToProps, actions)(Footer);
