import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';

import * as actions from '../../Redux/actions/actionCreators';

import styles from './SiderFilter.module.scss';

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const CheckboxGroup = Checkbox.Group;

function SiderFilter({ filters, filterToggle, filterToggleAll }) {
  return (
    <>
      <label className={styles['checkBox-label']}>Количество пересадок</label>
      <Checkbox
        className={styles['ant-checkbox-wrapper']}
        onChange={filterToggleAll}
        indeterminate={filters.length && filters.length < plainOptions.length}
        checked={filters.length === plainOptions.length}
      >
        Все
      </Checkbox>

      <CheckboxGroup
        className={styles.checkBoxGroup}
        onClick={(e) => {
          filterToggle(e.target.value);
        }}
        value={filters}
        options={plainOptions}
      />
    </>
  );
}
const mapStateToProps = (state) => ({
  filters: state.siderFilterReducer.filters,
});
export default connect(mapStateToProps, actions)(SiderFilter);
