import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import AddCityForm from './components/AddCityForm';
import Forecasts from './components/Forecasts';

import * as style from './style.css';

export namespace Weather {
  
  export interface Props extends RouteComponentProps<void> { }

  export interface State { }
}

export default class Weather extends React.Component<Weather.Props, Weather.State> {
  constructor(props: any) {
    super(props);
  }

  render() {

    return (
      <div className={style.weatherScene}>
        <Header />
        <AddCityForm actions={null} {...this.props}/>
        <Forecasts forecasts={null} {...this.props} />
      </div>
    );
  }
}