import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './AddCityForm';
import { actions as ForecastActions } from '../../../../redux/Forecasts'; //TODO: add Webpack alias to 'redux'
import { RootState } from '../../../../redux';


function mapStateToProps(state: RootState) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ForecastActions as any, dispatch),
    };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export default Container;
