/* @flow */
/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
  createContainer,
  VictoryTooltip,
} from 'victory';
// $FlowFixMe
import { format } from 'date-fns';
// $FlowFixMe
import ruLocale from 'date-fns/locale/ru';
import { type ChartsDataSet } from './data';
import './App.css';

type Props = {
  data: ChartsDataSet,
};

const VictoryCursorVoronoiContainer = createContainer('cursor', 'voronoi');

export default class LineChart extends React.Component<Props> {
  render() {
    const { data } = this.props;

    console.log('data', data);

    return (
      <VictoryChart
        containerComponent={
          <VictoryCursorVoronoiContainer
            labels={(d: Object) =>
              `${format(d.date, 'D MMM', { locale: ruLocale })}[${d.createdBy}]: ${d.count}`
            }
            labelComponent={
              <VictoryTooltip
                style={{ data: { color: 'red' } }}
                cornerRadius={0}
                flyoutStyle={{ fill: 'white' }}
              />
            }
            voronoiDimension="x"
            cursorDimension="x"
          />
        }
        theme={VictoryTheme.material}
      >
        {data.map((chartData, index) => {
          return <VictoryLine x="date" y="count" data={chartData} key={index} />;
        })}
        <VictoryAxis
          fixLabelOverlap
          tickFormat={x => format(x, 'DD.MM')}
          tickLabelComponent={<VictoryLabel angle={-60} />}
          scale="time"
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    );
  }
}
