import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import * as style from './style.css';

export namespace Weather {
  export interface Props extends RouteComponentProps<void> {
    forecasts: ForecastData[],
  }

  export interface State { }
}

export default class Weather extends React.Component<Weather.Props, Weather.State> {
  constructor(props: any) {
    super(props);
  }

  getForecastTable = forecasts => {
    return (
      <table className={style.forecastsTable}>
        <thead>
          <tr>
            <th>City</th>
            <th>12 am</th>
            <th>6 am</th>
            <th>12 pm</th>
            <th>6 pm</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast, index) => {
            return (
              <tr key={index}>
                <td>{forecast.cityName}</td>
                <td>{forecast.temperature[0]} C</td>
                <td>{forecast.temperature[1]} C</td>
                <td>{forecast.temperature[2]} C</td>
                <td>{forecast.temperature[3]} C</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const { forecasts } = this.props;

    return (
      <div className={style.forecastsContainer}>
        {forecasts.length > 0 ? this.getForecastTable(forecasts) : <div>Please type a city and press Search to get started.</div>}
      </div>
    );
  }
}