/* @flow */
/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import { VictoryTheme, VictoryPie } from 'victory';
import { type PieData } from './data';
import './App.css';

type Props = {
  data: PieData,
};

export default class LineChart extends React.Component<Props> {
  render() {
    const { data } = this.props;

    return <VictoryPie theme={VictoryTheme.material} data={data} />;
  }
}
