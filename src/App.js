/* @flow */

import * as React from 'react';
import _ from 'lodash';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { gqlData, type ChartsDataSet, type PieData } from './data';
import './App.css';

class App extends React.Component<{}> {
  normalizeForLine = (data: Array<Object>): ChartsDataSet => {
    return _.chain(data)
      .groupBy(x => x._id.createdBy)
      .map(val => {
        const normalizedArr = val.map(v => ({
          count: v.count,
          ...v._id,
          date: new Date(v._id.date).getTime(),
        }));
        return _.sortBy(normalizedArr, ['date']);
      })
      .value();
  };

  normalizeForPie = (data: ChartsDataSet): PieData => {
    return data.map(records => {
      const totalCount = records.reduce((total, rec) => {
        return total + rec.count;
      }, 0);

      return { x: records[0].createdBy, y: totalCount };
    });
  };

  render() {
    const lineData = this.normalizeForLine(gqlData);
    const pieData = this.normalizeForPie(lineData);

    return (
      <div className="App container-fluid">
        <h1>Victory</h1>
        <PieChart data={pieData} />
        <LineChart data={lineData} />
      </div>
    );
  }
}

export default App;
