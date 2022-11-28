import React from 'react';
import './GlobalFilter.scss';
import { Radio } from 'antd';
import 'antd/dist/antd.css';

function GlobalFilter() {
  return (
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
    </Radio.Group>
  );
}

export default GlobalFilter;
