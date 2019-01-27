import * as React from 'react';
import { connect } from 'react-redux';
import Component from './Forecasts';
import { RootState } from '../../../../redux';


function mapStateToProps(state: RootState) {
    return {
        forecasts: state.forecasts,
    };
}

const Container = connect(mapStateToProps)(Component);
export default Container;
