import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { actions as ForecastActions } from '../../../../redux/Forecasts';

import * as style from './style.css';

export namespace AddCityForm {
    export interface Props extends RouteComponentProps<void> {
        actions: typeof ForecastActions,
    }

    export interface State {
        city: string,
    }
}

export default class AddCityForm extends React.Component<AddCityForm.Props, AddCityForm.State> {
    constructor(props: any) {
        super(props);
        this.state = {
            city: '',
        };
    }

    render() {
        const { actions } = this.props;

        return (
            <div className={style.addCityForm}>
                <input type="text" value={this.state.city} onChange={e => this.setState({ city: e.target.value })} />
                <button onClick={() => actions.getForecastForCity(this.state.city)}>Search</button>
            </div>
        );
    }
}